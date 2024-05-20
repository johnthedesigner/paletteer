import { nanoid } from "nanoid";
import _ from "lodash";

import generateColors from "./generateColors";
import colorVariableFactory from "./colorVariableFactory";

// TODO: Create a new color palette from a supplied hex code
// 1. User Supplies Hex
// 2. Placeholder palette created with ID hex and temporary flag
// 3. Generate palette colors and choose color name
// 4. Save variables
// 5. Save swatches to plugin data with variable IDs
// 6. Update palette name and temporary flag on saved palette

// Set palette parameters
const swatchCount = 16;

const createPalette = async (
  figma: any, // The Figma plugin API methods
  hex: string, // The color we will build our palette from
  paletteCollection: any, // Where we will group our variables
  colorsNamesInUse: any, // Which color names have already been used
  addToList: Function // Storing objects in plugin data
) => {
  // Make a placeholder palette
  let paletteId = nanoid(); // This is the ID we will use permanently
  let placeholderPalette = {
    id: paletteId,
    placeholderHex: hex,
  };
  // Send the placeholder palette to the UI
  await addToList("paletteList", placeholderPalette);

  // Generate the full color palette
  let generatedPalette = await generateColors(
    hex,
    swatchCount,
    "",
    paletteId,
    true,
    colorsNamesInUse
  );
  // Loop through generated swatches, save them and create variables
  _.each(generatedPalette.swatches, async (swatch: any, index: number) => {
    let generatedSwatch = swatch;
    generatedSwatch.paletteId = paletteId; // Connect it to our saved palette by ID
    // Build a variable
    let colorVariable = colorVariableFactory(
      figma,
      index,
      paletteCollection,
      generatedPalette.name
    );
    console.log("GENERATED SWATch", generatedSwatch);
  });
};

export default createPalette;
