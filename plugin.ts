async function createRectangles(palette) {
  // Get the font ready
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

  const nodes: SceneNode[] = [];

  const whitePaint: SolidPaint = {
    type: "SOLID",
    color: { r: 1, g: 1, b: 1 }
  };

  const blackPaint: SolidPaint = {
    type: "SOLID",
    color: { r: 0, g: 0, b: 0 }
  };

  console.log(palette.swatches);

  for (let i = 0; i < palette.swatches.length; i++) {
    // Get swatch color
    let swatch = palette.swatches[i];
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
    rect.resizeWithoutConstraints(150, 100);
    rect.fills = [paint];
    figma.currentPage.appendChild(rect);

    // Label swatch with hex code
    let hex = figma.createText();
    hex.x = i * 160 + 10;
    hex.y = 8;
    hex.fills = [textColor];
    hex.fontSize = 16;
    hex.characters = swatch.hex;
    figma.currentPage.appendChild(hex);

    // Label swatch with white contrast
    let contrastW = figma.createText();
    contrastW.x = i * 160 + 10;
    contrastW.y = 28;
    contrastW.fills = [whitePaint];
    contrastW.fontSize = 16;
    contrastW.characters = swatch.contrastWhite;
    figma.currentPage.appendChild(contrastW);

    // Label swatch with black contrast
    let contrastB = figma.createText();
    contrastB.x = i * 160 + 10;
    contrastB.y = 48;
    contrastB.fills = [blackPaint];
    contrastB.fontSize = 16;
    contrastB.characters = swatch.contrastBlack;
    figma.currentPage.appendChild(contrastB);

    // Group swatch components
    figma.currentPage.selection = [rect, hex, contrastW, contrastB];
    let swatchGroup = figma.group(
      figma.currentPage.selection,
      figma.currentPage
    );
    swatchGroup.name = `Swatch / ${swatch.hex}`;
    nodes.push(swatchGroup);
  }
  let swatchGradient = figma.group(nodes, figma.currentPage);
  swatchGradient.name = "Swatch gradient";
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
}

figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === "create-palette" && typeof msg.palette != "undefined") {
    createRectangles(msg.palette);
  }
  figma.closePlugin();
};
