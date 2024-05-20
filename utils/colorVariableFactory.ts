// Create a new color variable for the default mode
const colorVariableFactory = async (
  figma: any, // Figma plugin API methods
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
export default colorVariableFactory;
