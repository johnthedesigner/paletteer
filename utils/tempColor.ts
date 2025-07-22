import { nanoid } from "nanoid";
import chroma from "chroma-js";
import _ from "lodash";

const hex = "#FFFFFF";
const contrastWhite = chroma.contrast(hex, "white");
const contrastBlack = chroma.contrast(hex, "black");
const tempColor = {
  id: nanoid(),
  paletteId: null,
  index: null,
  hex: chroma(hex).hex(),
  hue: chroma(hex).hsv()[0],
  sat: chroma(hex).hsv()[1],
  lum: chroma(hex).hsv()[2],
  hsv: chroma(hex).hsv(),
  hsl: chroma(hex).hsl(),
  rgb: chroma(hex).rgb(),
  contrastBlack: contrastBlack,
  contrastWhite: contrastWhite,
  displayColor: "black",
  sourceColorIndex: 0,
  steps: null,
  name: "",
};

export default tempColor;
