import chroma from "chroma-js";
import _ from "lodash";

import crayolaColors from "./crayolaColors";

const getColorName = (sourceColor: string, namesInUse: string[] = []) => {
  // Sort crayola colors by how close a match they are to our source color
  let colorsByDistance = _.sortBy(
    crayolaColors,
    (crayolaColor: any) => {
      return chroma.distance(crayolaColor.hex, sourceColor);
    },
    "asc"
  );

  // Choose a color name from the list of crayola colors
  // Choose the first one from the beginning of the list that isn't already in use
  let matchingCrayolaColor = _.find(colorsByDistance, (color: any) => {
    return !_.includes(namesInUse, color.name);
  });

  // Just in case, fall back on original hex code as our color name
  return matchingCrayolaColor ? matchingCrayolaColor.name : sourceColor;
};

export default getColorName;
