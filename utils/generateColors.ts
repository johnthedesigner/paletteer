import { v3 as uuidv3 } from "uuid";
import _ from "lodash";
import chroma from "chroma-js";

import * as Curves from "./curves";
import crayolaColors from "./crayolaColors";

const UUID_NAMESPACE = "a712f960-32ec-11ee-be56-0242ac120002";

const generateColors = async (
  sourceColor: string,
  steps: number = 16,
  customName: string
): Promise<any> => {
  // Bail out if there isn't really a source color provided
  if (!sourceColor) return true;

  // Configuration
  // let steps = 12; // Number of color swatches in each palette
  let contrastRange = new Array(0.2, 19.8); // We'll be generating palettes based on text contrast

  // build a distribution of contrast values we will target
  let contrastDistribution = _.times(steps, (index: number) => {
    let curveStep = Curves.easeInOutCustom(index / (steps - 1));
    let range = contrastRange[1] - contrastRange[0];
    return curveStep * range + contrastRange[0];
  });

  // Figure out the closest contrast value for source color and get the index
  let sourceContrast = chroma.contrast(sourceColor, "white");
  let closestContrastValue = _.first(
    _.sortBy(contrastDistribution, (contrastStep: number) => {
      return Math.abs(_.subtract(sourceContrast, contrastStep));
    })
  );

  // Return the index of the closest matching value
  let sourceColorIndex = _.findIndex(contrastDistribution, (o: number) => {
    return o === closestContrastValue;
  });

  // Confine a number to a range from 0 to 1
  let confine = (number: any) => {
    return Math.max(Math.min(number, 1), 0);
  };

  // Build gradient of contrast targets
  let lowContrast = 1.01;
  let highContrast = 19;
  let contrastRangeX = highContrast - lowContrast;
  let targetContrastArray = _.map(_.range(steps), (step: number) => {
    let output =
      Curves.easeInOutCustom((step + 1) / steps) * contrastRangeX + lowContrast;
    return output;
  });

  // Generate new colors close to target contrasts in array
  let colorOptionsArray = new Array(sourceColor);
  let hueRate = 0.02; // rate of hue change
  let satRate = 0.006; // rate of saturation change
  let lumRate = 0.02; // rate of luminosity change
  let changeFactor = 0.25; // Additional multiplier on change rates
  let loops = 400; // Max number of loops to generate color options
  // First build an array of many colors to choose from
  let loopCount = 1;

  const colorOptionLoop = async () => {
    // Add darker shades until we reach contrast
    let sourceChroma = chroma(sourceColor);
    let firstColorOption = _.first(colorOptionsArray);
    let lastColorOption = _.last(colorOptionsArray);

    if (
      chroma.contrast(
        firstColorOption ? firstColorOption : sourceColor,
        "white"
      ) < highContrast
    ) {
      let darkerColor = chroma
        .hsl(
          sourceChroma.get("hsl.h") - loopCount * hueRate * changeFactor,
          sourceChroma.get("hsl.s") + loopCount * satRate * changeFactor,
          sourceChroma.get("hsl.l") - loopCount * lumRate * changeFactor
        )
        .hex();
      colorOptionsArray = new Array(darkerColor).concat(colorOptionsArray);
    }
    // Add lighter shades until we reach contrast
    if (
      chroma.contrast(
        lastColorOption ? lastColorOption : sourceColor,
        "white"
      ) > lowContrast
    ) {
      let lighterColor = chroma
        .hsl(
          sourceChroma.get("hsl.h") + loopCount * hueRate * changeFactor,
          sourceChroma.get("hsl.s") - loopCount * satRate * changeFactor,
          sourceChroma.get("hsl.l") + loopCount * lumRate * changeFactor
        )
        .hex();
      colorOptionsArray.push(lighterColor);
    }
    // Set maximum number of loops to take
    if (loopCount < loops) {
      loopCount++;
      await colorOptionLoop();
    }
  };
  await colorOptionLoop();

  // _.times(steps * 15, (index) => {
  //   let chromaColor = chroma(sourceColor);
  //   let lighterHue = chromaColor.get("hsl.h") + hueRate * index;
  //   let lighterSat = confine(chromaColor.get("hsl.s") - satRate * index);
  //   let lighterLum = confine(chromaColor.get("hsl.l") + lumRate * index);
  //   let darkerHue = chromaColor.get("hsl.h") - hueRate * 2 * index;
  //   let darkerSat = confine(chromaColor.get("hsl.s") + satRate * 4 * index);
  //   let darkerLum = confine(chromaColor.get("hsl.h") - lumRate * index);
  //   let lighterColor = chroma(
  //     chroma.hsv(lighterHue, lighterSat, lighterLum)
  //   ).hex();
  //   let darkerColor = chroma(chroma.hsv(darkerHue, darkerSat, darkerLum)).hex();
  //   colorOptionsArray.push(darkerColor);
  //   colorOptionsArray.push(lighterColor);
  // });

  // Choose a final set of colors by which are closes to target contrast values from our array
  let contrastMatchedColors = _.map(
    targetContrastArray,
    (targetContrastValue: number) => {
      let selectedColor = _.first(
        _.sortBy(colorOptionsArray, (candidateColor: string) => {
          let contrastDifference = Math.abs(
            chroma.contrast(candidateColor, "white") - targetContrastValue
          );
          return contrastDifference;
        })
      );
      return selectedColor;
    }
  );

  // Assemble the swatch list for this palette
  // let swatchList = _.map(colorGradient, (color, index) => {
  // Use new gradient to make colors
  let swatchList = _.map(
    contrastMatchedColors,
    (color: string, index: number) => {
      // If this is the source color index, override the hex to the source color
      if (index === sourceColorIndex) {
        color = sourceColor;
      }
      const contrastWhite = chroma.contrast(color, "white");
      const contrastBlack = chroma.contrast(color, "black");
      var displayColor = "";
      if (contrastWhite >= 4.5) {
        displayColor = "white";
      } else {
        displayColor = "black";
      }
      return {
        hex: chroma(color).hex(),
        hue: chroma(color).get("hsl.h"),
        sat: chroma(color).get("hsl.s"),
        lum: chroma(color).get("hsl.l"),
        rgb: chroma(color).rgb(),
        contrastBlack: contrastBlack,
        contrastWhite: contrastWhite,
        displayColor: displayColor,
        sourceColorIndex,
        steps,
        name: "",
      };
    }
  );

  // Pick a name for this set of swatches and apply it to each swatch
  // Just in case we fail to find a color, fall back on supplied hex code
  var swatchName = "";
  if (customName === "") {
    let colorsByDistance = _.sortBy(
      crayolaColors,
      (crayolaColor: any) => {
        return chroma.distance(crayolaColor.hex, sourceColor);
      },
      "asc"
    );

    let matchingCrayolaColor = _.first(colorsByDistance);

    swatchName = matchingCrayolaColor ? matchingCrayolaColor.name : sourceColor;
  } else {
    swatchName = customName;
  }

  // Make the swatch name lowercase and replace spaces with hyphens
  let swatchNameFormatted = swatchName.trim().replace(/\s/g, "-").toLowerCase();

  // Add swatch names to each swatch in the palette
  _.each(swatchList, (swatch: any, i: number) => {
    swatch.name = `${swatchNameFormatted}-${i}`;
  });

  return {
    id: uuidv3(sourceColor, UUID_NAMESPACE),
    name: swatchName,
    swatches: swatchList,
    sourceColorIndex,
    colorOptionsArray,
  };
};

export default generateColors;
