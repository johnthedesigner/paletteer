import _ from "lodash";

async function createRectangles(palettes) {
  // Get the font ready
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  // const nodes: SceneNode[] = [];
  const allSwatches = new Array();
  const nodes = new Array();

  const whitePaint = {
    type: "SOLID",
    color: { r: 1, g: 1, b: 1 },
  };

  const grayPaint = {
    type: "SOLID",
    color: { r: 0, g: 0, b: 0 },
    opacity: 0.15,
  };

  const blackPaint = {
    type: "SOLID",
    color: { r: 0, g: 0, b: 0 },
  };

  const buildSwatch = async (swatch, paletteIndex, swatchIndex) => {
    // Get swatch color
    let r = swatch.rgb[0] / 255;
    let g = swatch.rgb[1] / 255;
    let b = swatch.rgb[2] / 255;
    let paint: SolidPaint = {
      type: "SOLID",
      color: { r, g, b },
    };

    // Save paint style if it doesn't already exist
    let existingStyles = figma.getLocalPaintStyles();
    // Get any swatches that match current swatch's hex code
    let matchingSwatches = _.find(existingStyles, (style) => {
      return style.name === swatch.hex.toUpperCase();
    });
    let swatchStyle = null;
    if (matchingSwatches === undefined) {
      console.log("No saved swatch; saving new swatch to local styles");
      swatchStyle = figma.createPaintStyle();
      swatchStyle.name = swatch.hex.toUpperCase();
      swatchStyle.paints = [paint];
    } else {
      // if it already exists we will record it here to use it later
      console.log("Swatch already exists in local styles");
      swatchStyle = matchingSwatches;
    }

    // Swatch layout values
    let swatchWidth = 130;
    let swatchColorHeight = 90;
    let swatchLabelHeight = 40;
    let swatchHeight = swatchColorHeight + swatchLabelHeight;
    let gutterX = 10;
    let gutterY = 20;
    let swatchX = (swatchWidth + gutterX) * swatchIndex;
    let swatchColorY = (swatchHeight + gutterY) * paletteIndex;
    let swatchLabelY = swatchColorY + swatchColorHeight;
    let textPadding = 10;
    let hexFontSize = 16;
    let contrastFontSize = 12;

    // Build swatch color rectangle
    const colorRect = figma.createRectangle();
    colorRect.x = swatchX;
    colorRect.y = swatchColorY;
    colorRect.resizeWithoutConstraints(swatchWidth, swatchColorHeight);
    colorRect.fillStyleId = swatchStyle.id;

    // Build swatch label rectangle
    const labelRect = figma.createRectangle();
    labelRect.x = swatchX;
    labelRect.y = swatchLabelY;
    labelRect.resizeWithoutConstraints(swatchWidth, swatchLabelHeight);
    labelRect.fills = [whitePaint];
    labelRect.strokes = [grayPaint];
    labelRect.strokeWeight = 1;

    // Label swatch with hex code
    let hex = figma.createText();
    hex.x = swatchX + textPadding;
    hex.y = swatchLabelY;
    hex.lineHeight = { value: swatchLabelHeight, unit: "PIXELS" };
    hex.fills = [blackPaint];
    hex.fontSize = hexFontSize;
    hex.characters = swatch.hex.toUpperCase();
    hex.textAlignVertical = "CENTER";

    // Label swatch with white contrast
    let contrastW = figma.createText();
    contrastW.x = swatchX + textPadding * 2;
    contrastW.y = swatchColorY + textPadding;
    contrastW.fills = [whitePaint];
    contrastW.fontSize = contrastFontSize;
    contrastW.characters = swatch.contrastWhite;

    // Label swatch with black contrast
    let contrastB = figma.createText();
    contrastB.x = swatchX + textPadding * 2;
    contrastB.y = swatchColorY + textPadding * 2 + contrastFontSize;
    contrastB.fills = [blackPaint];
    contrastB.fontSize = contrastFontSize;
    contrastB.characters = swatch.contrastBlack;

    // Greater contrast highlight dot
    let contrastDot = figma.createEllipse();
    contrastDot.x = swatchX + textPadding;
    contrastDot.y =
      swatch.contrastWhite / 1 > swatch.contrastBlack / 1
        ? contrastW.y + contrastFontSize / 4
        : contrastB.y + contrastFontSize / 4;
    contrastDot.resizeWithoutConstraints(
      contrastFontSize / 2,
      contrastFontSize / 2
    );
    let contrastColor =
      swatch.contrastWhite / 1 > swatch.contrastBlack / 1
        ? whitePaint
        : blackPaint;
    contrastDot.fills = [contrastColor];

    // Group swatch components
    figma.currentPage.selection = [
      colorRect,
      labelRect,
      hex,
      contrastW,
      contrastB,
      contrastDot,
    ];
    let swatchGroup = figma.group(
      figma.currentPage.selection,
      figma.currentPage
    );
    swatchGroup.name = `Swatch / ${swatch.hex}`;
    figma.currentPage.appendChild(swatchGroup);

    return swatchGroup;
  };

  const buildGradient = async (palette, paletteIndex) => {
    let gradient = new Array();
    let swatchCount = palette.swatches.length;

    console.log("building gradient swatches");
    const swatchLoop = async (swatchIndex) => {
      console.log(`output swatch: ${paletteIndex} - ${swatchIndex}`);
      let swatch = palette.swatches[swatchIndex];
      let swatchComponent = await buildSwatch(
        swatch,
        paletteIndex,
        swatchIndex
      );
      gradient.push(swatchComponent);
      allSwatches.push(swatchComponent);
      nodes.push(swatchComponent);

      if (swatchIndex < swatchCount - 1) {
        await swatchLoop(swatchIndex + 1);
      } else {
        // Group swatches into a gradient
        console.log("GROUP ELEMENTS", gradient, figma.currentPage);
        let swatchGradient = await figma.group(gradient, figma.currentPage);
        swatchGradient.name = "Swatch gradient";
      }
    };
    await swatchLoop(0);
  };

  // Loop through palette to build a gradient
  let colorPalette = new Array();
  let paletteCount = palettes.length;
  const gradientLoop = async (i) => {
    colorPalette.push(await buildGradient(palettes[i], i));
    if (i < paletteCount - 1) {
      gradientLoop(i + 1);
    } else {
      // Select all swatches and adjust view to include all swatches
      figma.viewport.scrollAndZoomIntoView(nodes);
      figma.currentPage.selection = nodes;
      figma.closePlugin();
    }
  };
  gradientLoop(0);
}

figma.showUI(__html__, { width: 800, height: 500, themeColors: true });

// Traverse objects in current selection and pick out fill colors
let selectionColors = [];
const getSelectionColors = (selection) => {
  _.forIn(selection, function(object) {
    if (object.children) {
      getSelectionColors(object.children);
    }
    if (object.fills) {
      _.each(object.fills, (fill) => {
        if (fill.color) {
          selectionColors = [...selectionColors, fill.color];
        }
        if (fill.gradientStops) {
          _.each(fill.gradientStops, (stop) => {
            selectionColors = [...selectionColors, stop.color];
          });
        }
      });
    }
  });
  return selectionColors;
};

figma.ui.postMessage({
  type: "selection-colors",
  selectionColors: getSelectionColors(figma.currentPage.selection),
});
// figma.ui.postMessage({ type: "init" });

// Traverse objects in entire page and pick out fill colors
let pageColors = [];
const getPageColors = (pageObjects) => {
  _.forIn(pageObjects, function(object) {
    if (object.children) {
      getPageColors(object.children);
    }
    if (object.fills) {
      _.each(object.fills, (fill) => {
        if (fill.color) {
          pageColors = [...pageColors, fill.color];
        }
        if (fill.gradientStops) {
          _.each(fill.gradientStops, (stop) => {
            pageColors = [...pageColors, stop.color];
          });
        }
      });
    }
  });
  return pageColors;
};

figma.ui.postMessage({
  type: "page-colors",
  pageColors: getPageColors(figma.currentPage.children),
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-palette" && typeof msg.palettes != "undefined") {
    createRectangles(msg.palettes);
  } else if (msg.type === "cancel") {
    figma.closePlugin();
  }
};

figma.ui.onmessage = (msg) => {
  if (msg.type === "get-plugin-data") {
    figma.ui.postMessage({
      type: "get-plugin-data",
      pluginData: figma.document.getPluginData(),
    });
  }
};
