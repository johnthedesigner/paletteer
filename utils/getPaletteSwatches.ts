import _ from "lodash";

const paletteSwatches = (palette: any, swatches: any[]) => {
  return _.orderBy(
    _.filter(swatches, (swatch: any) => {
      return swatch.paletteId === palette.id;
    }),
    "index",
    "asc"
  );
};

export default paletteSwatches;
