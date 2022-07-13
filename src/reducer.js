import { dedupe } from "./utils/swatchUtils";
import generateColors from "./utils/generateColors";

export const initialState = {
  pageColors: [],
  selectionColors: [],
  palette: [],
  savedSwatches: [],
};

const logAction = (action) => {
  console.group("PLUGIN MESSAGE");
  console.log("Action: ", action.type);
  console.log("Payload: ", action);
  console.groupEnd();
};

export const reducer = (state, action) => {
  logAction(action);

  let newState = { ...state };

  switch (action.type) {
    case "receive-palette":
      newState.palette = action.palette;
      break;
    case "receive-page-colors":
      newState.pageColors = dedupe(action.pageColors);
      break;

    case "receive-selection-colors":
      newState.selectionColors = dedupe(action.selectionColors);
      break;

    case "receive-saved-swatches":
      newState.savedSwatches = action.savedSwatches;
      break;

    default:
    // Don't do anything
  }

  console.log(newState);
  return newState;
};

export default reducer;
