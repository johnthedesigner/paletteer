function createRectangles(palette) {
  const nodes: SceneNode[] = [];

  for (let i = 0; i < palette.swatches.length; i++) {
    let swatch = palette.swatches[i];
    let r = swatch.rgb[0] / 255;
    let g = swatch.rgb[1] / 255;
    let b = swatch.rgb[2] / 255;
    let paint: SolidPaint = {
      type: "SOLID",
      color: { r, g, b }
    };
    const rect = figma.createRectangle();
    rect.x = i * 150;
    rect.fills = [paint];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);
  }
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
