import { showUI } from "@create-figma-plugin/utilities";
import { map, includes, filter, each, uniq } from "lodash";
import chroma from "chroma-js";

import generateColors from "../utils/generateColors";
import crayolaColors from "../utils/crayolaColors";
var colorNames = new Array();
if (crayolaColors) {
  colorNames = crayolaColors;
}

export default function () {
  showUI({ width: 900, height: 640 });

  // Configure saved variables
  const paletteCollectionName = "Paletteer Palettes";

  // Convert rgb objects to hex strings
  const rgbToHex = async (rgbObject: any) => {
    let multipliedRgb = {
      r: rgbObject.r * 255,
      g: rgbObject.g * 255,
      b: rgbObject.b * 255,
    } as any;
    // return the hex code for variable's color
    let hexString = await chroma(multipliedRgb).hex();
    return hexString;
  };

  // Traverse objects in current selection and pick out fill colors
  let selectionColors: any = [];
  let deepColorSample = false;
  const getColors = async (selection: any) => {
    for (var i = 0; i < selection.length; i++) {
      let object = selection[i];
      if (object.children && deepColorSample) {
        getColors(object.children);
      }
      if (object && object.fills) {
        for (var f = 0; f < object.fills.length; f++) {
          let fill = object.fills[f];
          if (fill.color) {
            selectionColors.push(await rgbToHex(fill.color));
          }
          if (fill.gradientStops) {
            for (var s = 0; s < fill.gradientStops.length; s++) {
              let stop = fill.gradientStops[s];
              selectionColors.push(await rgbToHex(stop.color));
              // selectionColors = [...selectionColors, stop.color];
            }
          }
        }
      }
    }
    // Make sure to return a list of unique hex codes
    return uniq(selectionColors);
  };

  // Check if hex exists in saved seed colors
  const hexColorIsSaved = async (hex: string) => {
    let palettesToCompare = await getData("savedPaletteList");
    let seedColorsToCompare = map(palettesToCompare, (palette) => {
      return palette.swatches[palette.sourceColorIndex].hex;
    });
    return includes(seedColorsToCompare, hex);
  };

  // Get plugin data
  const getData = async (string: string) => {
    let stringData = await figma.root.getPluginData(string);
    let parsedData =
      string != "" ? await JSON.parse(stringData).data : { test: "test" };
    return parsedData;
  };

  // Set plugin data
  const setData = async (name: string, data: any) => {
    let stringifiedData = await JSON.stringify({ data });
    await figma.root.setPluginData(name, stringifiedData);
  };

  // Get plugin config data
  const getConfig = async () => {
    let configData = await getData("paletteerConfig");
    return configData;
  };

  // Set plugin config data by key and stringified value
  const setConfig = async (key: string, value: any) => {
    let configData = await getData("paletteerConfig");
    if (configData === "") {
      configData = {};
    }
    configData[key] = value;
    await setData("paletteerConfig", configData);
    getConfig();
  };

  // Find palette collection or initialize new one
  const getPaletteCollection = async () => {
    // Look for palette collection ID and use it to find palette collection
    let configData = await getConfig();
    let paletteCollectionId = configData.paletteCollectionId
      ? configData.paletteCollectionId
      : "";
    let paletteCollection = await figma.variables.getVariableCollectionById(
      paletteCollectionId
    );
    // If there isn't a palette collection, create one
    if (paletteCollection === null) {
      // Create collection if it isn't there already
      paletteCollection = await figma.variables.createVariableCollection(
        paletteCollectionName
      );
      // Record our new palette collection ID in plugin data
      await setConfig("paletteCollectionId", paletteCollection.id);
    }
    return paletteCollection;
  };

  // Find palette collection or initialize new one
  const getDefaultModeId = async () => {
    // Look for palette collection ID and use it to find palette collection
    let { defaultModeId } = await getPaletteCollection();
    return defaultModeId;
  };

  // Create a new color variable with only the default mode
  const colorVariableFactory = async (
    index: number,
    paletteCollection: any,
    paletteName: string
  ) => {
    let colorVariable = await figma.variables.createVariable(
      `${paletteName}/${(index + 1).toFixed(0).padStart(2, "0")}`, // Name variables upon creation, ex. 'palette name/01'
      paletteCollection,
      "COLOR"
    );
    return colorVariable;
  };

  // Get hex color for a variable by Variable ID
  const getVariableColorById = async (variableId: string) => {
    // Get rgba data from the variable matching this swatch
    let colorVariableData = await figma.variables.getVariableById(variableId);
    // Get the ID for our default variable mode
    let defaultModeId = await getDefaultModeId();
    // Get rgba data for color variable
    let variableRgba = colorVariableData?.valuesByMode[defaultModeId] as any;
    // // return the hex code for variable's color
    return rgbToHex(variableRgba);
  };

  // Map the current variable colors to saved palettes
  const mapVariablesToPalettes = async () => {
    let currentPalettes = await getData("savedPaletteList");
    // Traverse palettes and add in up-to-date color variable data
    let paletteIndex = 0;
    for await (let palette of currentPalettes) {
      let swatchIndex = 0;
      for await (let swatch of palette.swatches) {
        // Save the hex value for our up-to-date variable back into the swatch
        let variableColor = await getVariableColorById(swatch.colorVariableId);
        currentPalettes[paletteIndex].swatches[swatchIndex].variableColor =
          variableColor;
        swatchIndex++;
      }
      paletteIndex++;
    }
    return currentPalettes;
  };

  // Post latest seed colors to the UI
  const postPalettesToUI = async () => {
    let currentPalettes = await mapVariablesToPalettes();
    // Send data to the UI
    figma.ui.postMessage({
      type: "receive-palettes",
      palettes: currentPalettes,
    });
  };

  const postConfigToUI = async () => {
    let configData = await getConfig();
    figma.ui.postMessage({
      type: "receive-config",
      configData,
    });
  };

  // Add new color to palettes
  const newColorFromHex = async (hex: string) => {
    let configData = await getConfig();
    let stepCount = configData != "" ? configData.stepCount : 16;
    let isSavedAlready = await hexColorIsSaved(hex);
    if (!isSavedAlready) {
      let newPalette = await generateColors(hex, stepCount, "");

      // Add palette to variable collection
      // Get palette variable collection
      let paletteCollection = await getPaletteCollection();

      // Save colors to variables
      if (paletteCollection != null) {
        // Get default mode ID
        let modeId = paletteCollection.defaultModeId;

        // Loop through color variable creation
        for (let step = 0; step < newPalette.swatches.length; step++) {
          // Assemble a new color variable
          let colorVariable = await colorVariableFactory(
            step,
            paletteCollection,
            newPalette.name
          );

          // Assign color to the newly created variable
          let swatch = newPalette.swatches[step];
          colorVariable.setValueForMode(modeId, {
            r: swatch.rgb[0] / 255,
            g: swatch.rgb[1] / 255,
            b: swatch.rgb[2] / 255,
          });

          // Record color variable ID in the palette data and save to plugin data
          newPalette.swatches[step].colorVariableId = colorVariable.id;
        }

        // Add palette to plugin data
        let existingPalette = await getData("savedPaletteList");
        let updatedPaletteList = [...existingPalette, newPalette];
        await setData("savedPaletteList", updatedPaletteList);

        // Update palette collection ID in plugin data
        await setConfig("paletteCollectionId", paletteCollection.id);
        await setConfig("paletteCollection", paletteCollection);
      }
    }
  };

  // Delete Color Gradient
  const removeColorByHex = async (hex: string) => {
    let existingPaletteList = await getData("savedPaletteList");

    // Find matching palette and remove color variables
    each(existingPaletteList, (palette) => {
      // Build a list of swatch hex codes
      let hexList = map(palette.swatches, (swatch) => {
        return swatch.hex;
      });
      // Check if this is the right palette
      if (includes(hexList, hex)) {
        // Loop through swatches and remove the matching figma variables
        each(palette.swatches, (swatch) => {
          figma.variables.getVariableById(swatch.colorVariableId)?.remove();
        });
      }
    });

    // Look for saved palette in plugin data, remove it and update plugin data
    let newPaletteList = filter(existingPaletteList, (palette) => {
      return !includes(
        map(palette.swatches, (swatch) => {
          return swatch.hex;
        }),
        hex
      );
    });
    // Update plugin data
    await setData("savedPaletteList", newPaletteList);
  };

  // PLUGIN STATE MANAGEMENT

  // Post initial data to UI on plugin open
  const initPlugin = async () => {
    // Uncomment to clean everything out when we have broken our plugin state
    // figma.root.setPluginData("savedPaletteList", "");
    await figma.ui.postMessage({
      type: "init-plugin",
      selectionColors: await getColors(figma.currentPage.selection),
      pageColors: await getColors(figma.currentPage.children),
      fileName: figma.root.name,
    });
    await postConfigToUI();
    await postPalettesToUI();
  };
  // Run Once
  initPlugin();

  // Recieve messages from the UI
  figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
      case "reset-data":
        // Remove all plugin data just in case
        await setData("savedSeedColorList", "");
        await setData("savedPaletteList", "");
        await setData("paletteerConfig", "");
        postPalettesToUI();
        postConfigToUI();
        break;

      // case "add-seed-color":
      //   // Check if this color is already one of our seed colors
      //   let isHexSaved = await hexColorIsSaved(msg.hex);
      //   if (!isHexSaved) {
      //     // If this is not already a seed color, add it and re-sort the list
      //     // await upsertSeedColor(await seedFactory(msg.hex));
      //     postPalettesToUI();
      //   }
      //   break;

      case "add-color":
        await newColorFromHex(msg.hex);
        postPalettesToUI();
        break;

      case "remove-color":
        await removeColorByHex(msg.hex);
        postPalettesToUI();
        break;

      case "get-config":
        await getConfig();
        break;

      case "set-config":
        let configData = await setConfig(msg.key, msg.value);
        break;

      //   case "remove-seed-color":
      //     let updatedSeedColors = _.remove(
      //       await getSeedColors(),
      //       (seedColor: any) => {
      //         return seedColor.id != msg.id;
      //       }
      //     );
      //     await setSeedColors(updatedSeedColors);
      //     postPalettesToUI();
      //     break;

      //   case "update-seed-hex":
      //     let seedColorUpdatedHex = await getSeedByID(msg.seedID);
      //     seedColorUpdatedHex.hex = msg.seedHex;
      //     await upsertSeedColor(seedColorUpdatedHex);
      //     postPalettesToUI();
      //     break;

      //   case "update-seed-name":
      //     let seedColorUpdatedName = await getSeedByID(msg.seedID);
      //     seedColorUpdatedName.name = msg.seedName;
      //     await upsertSeedColor(seedColorUpdatedName);
      //     postPalettesToUI();
      //     break;

      //   // case "toggle-seed-variables":
      //   //   let seedColorToggledVariables = await getSeedByID(msg.seedID);
      //   //   seedColorToggledVariables.saveVariables =
      //   //     !seedColorToggledVariables.saveVariables;
      //   //   await upsertSeedColor(seedColorToggledVariables);
      //   //   postPalettesToUI();
      //   //   break;

      case "generate-style-guide":
        figma.notify(
          "Paletteer has generated swatches and example components to help get you started!"
        );
        break;

      case "close-plugin":
        figma.closePlugin();
        break;

      default:
      // figma.closePlugin();
    }
  };
}
