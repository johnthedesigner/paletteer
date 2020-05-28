import _ from "lodash";

async function createRectangles(palettes) {
  // Get the font ready
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

  // const nodes: SceneNode[] = [];
  const allSwatches = new Array();
  const nodes = new Array();

  const whitePaint: SolidPaint = {
    type: "SOLID",
    color: { r: 1, g: 1, b: 1 }
  };

  const blackPaint: SolidPaint = {
    type: "SOLID",
    color: { r: 0, g: 0, b: 0 }
  };

  const buildSwatch = (swatch, yOffset, i) => {
    // Get swatch color
    let r = swatch.rgb[0] / 255;
    let g = swatch.rgb[1] / 255;
    let b = swatch.rgb[2] / 255;
    let paint: SolidPaint = {
      type: "SOLID",
      color: { r, g, b }
    };

    // Which color text reads better over this color
    let textColor =
      swatch.contrastWhite > swatch.contrastBlack ? whitePaint : blackPaint;

    // Build swatch rectangle
    const rect = figma.createRectangle();
    rect.x = i * 160;
    rect.y = yOffset;
    rect.resizeWithoutConstraints(150, 100);
    rect.fills = [paint];

    // Label swatch with hex code
    let hex = figma.createText();
    hex.x = i * 160 + 10;
    hex.y = 8 + yOffset;
    hex.fills = [textColor];
    hex.fontSize = 16;
    hex.characters = swatch.hex;

    // Label swatch with white contrast
    let contrastW = figma.createText();
    contrastW.x = i * 160 + 10;
    contrastW.y = 28 + yOffset;
    contrastW.fills = [whitePaint];
    contrastW.fontSize = 16;
    contrastW.characters = swatch.contrastWhite;

    // Label swatch with black contrast
    let contrastB = figma.createText();
    contrastB.x = i * 160 + 10;
    contrastB.y = 48 + yOffset;
    contrastB.fills = [blackPaint];
    contrastB.fontSize = 16;
    contrastB.characters = swatch.contrastBlack;

    // Group swatch components
    figma.currentPage.selection = [rect, hex, contrastW, contrastB];
    let swatchGroup = figma.group(
      figma.currentPage.selection,
      figma.currentPage
    );
    swatchGroup.name = `Swatch / ${swatch.hex}`;
    figma.currentPage.appendChild(swatchGroup);

    return swatchGroup;
  };

  const buildGradient = (palette, paletteIndex) => {
    console.log(figma.currentPage);
    let gradient = new Array();
    let yOffset = 110 * paletteIndex;
    console.log(yOffset);
    let swatchCount = palette.swatches.length;

    console.log("building gradient swatches");
    const swatchLoop = i => {
      console.log(`output swatch: ${paletteIndex} - ${i}`);
      let swatch = palette.swatches[i];
      let swatchComponent = buildSwatch(swatch, yOffset, i);

      gradient.push(swatchComponent);
      allSwatches.push(swatchComponent);
      nodes.push(swatchComponent);

      if (i < swatchCount - 1) {
        swatchLoop(i + 1);
      } else {
        // Group swatches into a gradient
        let swatchGradient = figma.group(gradient, figma.currentPage);
        swatchGradient.name = "Swatch gradient";
      }
    };
    swatchLoop(0);
  };

  // Loop through palette to build a gradient
  let colorPalette = new Array();
  let paletteCount = palettes.length;
  const gradientLoop = i => {
    colorPalette.push(buildGradient(palettes[i], i));
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

figma.showUI(__html__, { width: 300, height: 324 });

// Traverse objects in current selection and pick out fill colors
let selectionColors = [];
const getSelectionColors = selection => {
  _.forIn(selection, function(object) {
    if (object.children) {
      getSelectionColors(object.children);
    }
    if (object.fills) {
      _.each(object.fills, fill => {
        if (fill.color) {
          selectionColors = [...selectionColors, fill.color];
        }
        if (fill.gradientStops) {
          _.each(fill.gradientStops, stop => {
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
  selectionColors: getSelectionColors(figma.currentPage.selection)
});
// figma.ui.postMessage({ type: "init" });

figma.ui.onmessage = msg => {
  if (msg.type === "create-palette" && typeof msg.palettes != "undefined") {
    createRectangles(msg.palettes);
  } else if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
