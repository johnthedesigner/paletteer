import chroma from "chroma-js";

// Convert rgb objects to hex strings
export const rgbToHex = async (rgbObject: any) => {
  let multipliedRgb = {
    r: rgbObject.r * 255,
    g: rgbObject.g * 255,
    b: rgbObject.b * 255,
  } as any;
  // return the hex code for variable's color
  let hexString = await chroma(multipliedRgb).hex();
  return hexString;
};
