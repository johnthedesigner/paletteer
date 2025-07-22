import {
  convertRgbColorToHexColor,
  showUI,
} from "@create-figma-plugin/utilities";
import { filter, find, each, uniq, remove } from "lodash";
import { nanoid } from "nanoid/non-secure";
import _ from "lodash";

import generateColors from "../utils/generateColors";
import crayolaColors from "../utils/crayolaColors";
var colorNames = new Array();
if (crayolaColors) {
  colorNames = crayolaColors;
}

export default function () {
  showUI({ width: 900, height: 600 });

  // Enable saving color variables
  const saveColorVariables = true; // TODO: Make this a user-selectable option
  // Configure saved variables
  const paletteCollectionName = "Paletteer Palettes";

  // NEW PLUGIN STORAGE
  // Get & set plugin data
  const getData = async (string: string) => {
    let stringData = await figma.root.getPluginData(string);
    console.log("GETTING DATA", string, stringData);
    if (stringData === "") {
      return null;
    } else {
      return await JSON.parse(stringData).data;
    }
  };
  const setData = async (name: string, data: any) => {
    let stringifiedData = await JSON.stringify({ data });
    await figma.root.setPluginData(name, stringifiedData);
  };

  // Get & set List-type data
  const getList = async (listName: string) => {
    let list = await getData(listName);
    if (list) {
      return list;
    } else {
      return [];
    }
  };
  const setList = async (listName: string, list: any) => {
    setData(listName, list);
  };
  const getListItemById = async (id: string, listName: string) => {
    let currentList = await getList(listName);
    return await find(currentList, (item: any) => {
      return item.id === id;
    });
  };
  const getListItemsByKeyValue = async (
    listName: string,
    key: string,
    value: string
  ) => {
    let allListItems = await getList(listName);
    return filter(allListItems, (item: any) => {
      return item[key] === value;
    });
  };
  const addToList = async (listName: string, item: any) => {
    let existingList = await getList(listName);
    setData(listName, [...existingList, item]);
  };
  const updateListById = async (listName: string, id: string, newItem: any) => {
    let existingList = await getList(listName);
    console.log("UPDATING ITEM IN A LIST BY ID", listName, existingList, id);
    var updatedList = new Array();
    for (let index = 0; index < existingList.length; index++) {
      let existingItem = existingList[index];
      if (existingItem.id === id) {
        // If this is the swatch to be replaced, return new list item
        updatedList.push(newItem);
      } else {
        // Otherwise return the existing list item
        updatedList.push(existingItem);
      }
    }
    setList(listName, updatedList);
  };

  // Supply a named list and an object id to remove an item
  const removeFromListById = async (listName: string, id: string) => {
    let editedList = await getList(listName);
    await remove(editedList, (item: any) => {
      return item.id === id;
    });
    setList(listName, editedList);
  };

  // Get & set config data
  const configDataName = "paletteerConfig";
  const getConfig = async () => {
    let configData = await getData(configDataName);
    return configData;
  };
  const setConfig = async (key: string, value: any) => {
    let configData = await getData(configDataName);
    if (!configData) {
      configData = {};
    }
    configData[key] = value;
    await setData(configDataName, configData);
    return await getConfig();
  };

  // Find palette collection or initialize new one
  const getDefaultModeId = async () => {
    // Look for palette collection ID and use it to find palette collection
    let { defaultModeId } = await getPaletteCollection();
    return defaultModeId;
  };

  // Get color names currently in use
  const colorNamesInUse = async () => {
    let currentPaletteList = await getList("paletteList");
    let colorNames = [] as string[];
    for (
      let paletteIndex = 0;
      paletteIndex < currentPaletteList.length;
      paletteIndex++
    ) {
      let selectedPalette = currentPaletteList[paletteIndex];
      await colorNames.push(selectedPalette.name);
    }
    return colorNames;
  };

  // Create a new color variable for the default mode
  const colorVariableFactory = async (
    index: number,
    paletteCollection: any,
    paletteName: string
  ) => {
    console.log("ADDING VARIABLE TO COLLECTION", paletteCollection);
    let colorVariable = await figma.variables.createVariable(
      `${paletteName}/${(index + 1).toFixed(0).padStart(2, "0")}`, // Name variables upon creation, ex. 'palette name/01'
      paletteCollection,
      "COLOR"
    );
    console.log("COLOR VARIABLE", colorVariable);
    return colorVariable;
  };

  // Find palette collection or initialize new one
  const getPaletteCollection = async () => {
    // Look for palette collection ID and use it to find palette collection
    let configData = await getConfig();
    let paletteCollectionId =
      configData && configData.paletteCollectionId
        ? configData.paletteCollectionId
        : null;
    // Prepare palette collection object
    let paletteCollection: any;
    // If there isn't a palette collection ID, create a new collection
    if (paletteCollectionId === null) {
      // Create collection if it isn't there already
      paletteCollection = await figma.variables.createVariableCollection(
        paletteCollectionName
      );
      // Record our new palette collection ID in plugin data
      await setConfig("paletteCollectionId", paletteCollection.id);
    } else {
      // If the ID isn't null, get the existing variable collection
      paletteCollection = await figma.variables.getVariableCollectionById(
        paletteCollectionId
      );
    }
    console.log(
      "I FOUND/MADE A PALETTE COLLECTION",
      paletteCollection,
      figma.variables.getLocalVariableCollections()
    );
    return paletteCollection;
  };

  // Update all swatch variables from latest palettes and swatches
  const updateSwatchVariableNames = async (
    // palettes: any,
    // swatches: any,
    saveColorVariables: Boolean = true
  ) => {
    // Get all swatches and palettes first
    let currentPalettes = await getList("paletteList");
    let currentSwatches = await getList("swatchList");
    // console.log("UPDATING VARIABLE NAMES");
    // Skip this all if we're not currently saving variables
    if (saveColorVariables) {
      // console.log("SAVING VARIABLES ENABLED", currentSwatches);
      for (
        let swatchIndex = 0;
        swatchIndex < currentSwatches.length;
        swatchIndex++
      ) {
        // Get the existing swatch variable
        let swatch = currentSwatches[swatchIndex];
        let swatchPalette = _.find(currentPalettes, (palette: any) => {
          return palette.id === swatch.paletteId;
        });
        // console.log("UPDATING SWATCH", swatch);
        let swatchVariable = await figma.variables.getVariableById(
          swatch.colorVariableId
        );
        // If the variable exists, update the name, otherwise do nothing
        if (swatchVariable) {
          let updatedName = `${swatchPalette.name}/${(swatch.index + 1)
            .toFixed(0)
            .padStart(2, "0")}`;
          let existingName = swatchVariable.name;
          if (existingName != updatedName) {
            swatchVariable.name = `${swatchPalette.name}/${(swatch.index + 1)
              .toFixed(0)
              .padStart(2, "0")}`;
          }
        }
      }
    }
  };

  // Update all swatch variable colors from the latest palettes and swatches
  const updateSwatchVariableColors = async (
    // palette: any,
    // swatches: any,
    saveColorVariables: Boolean = true
  ) => {
    console.log("TIME TO UPDATE VARIABLE COLORS");
    let currentSwatches = await getList("swatchList");
    // Skip this all if we're not currently saving variables
    if (saveColorVariables) {
      let defaultModeId = await getDefaultModeId();
      for (
        let swatchIndex = 0;
        swatchIndex < currentSwatches.length;
        swatchIndex++
      ) {
        // Get the existing swatch variable
        let swatch = currentSwatches[swatchIndex];
        let swatchVariable = await figma.variables.getVariableById(
          swatch.colorVariableId
        );
        console.log("UPDATE THIS VARIABLE", swatch, swatchVariable);
        // If the variable exists, update the name, otherwise do nothing
        if (swatchVariable) {
          // Assign swatch color to the variable
          await swatchVariable?.setValueForMode(defaultModeId, {
            r: swatch.rgb[0] / 255,
            g: swatch.rgb[1] / 255,
            b: swatch.rgb[2] / 255,
          });
        }
        console.log("UPDATED VARIABLE", swatchVariable);
      }
    } else {
      // If we aren't saving variables anymore, look for a collection and delete it
      let existingCollection = await getPaletteCollection();
      console.log(
        "NOT SAVING, DELETE COLLECTION IF WE HAVE ONE",
        existingCollection
      );
      if (existingCollection) {
        existingCollection.remove();
      }
    }
    console.log("DONE UPDATING VARIABLES 1", await getList("swatchList"));
    console.log("DONE UPDATING VARIABLES 2", await getPaletteCollection());
    let checkSwatchList = await getList("swatchList");
    let checkSwatch = checkSwatchList[0];
    let checkVariable = await getVariableColorById(checkSwatch.colorVariableId);
    console.log("DOES THIS VARIABLE STILL EXIST?", checkVariable);
  };

  // Update swatch variables based on color variable settings
  const updateSwatchVariable = async (
    swatch: any,
    paletteId: string,
    variableId: any,
    saveColorVariables: Boolean = true
  ) => {
    // Get our existing color variable and related data
    let paletteCollection = await getPaletteCollection();
    let palette = find(await getList("paletteList"), (palette: any) => {
      return palette.id === paletteId;
    });
    let defaultModeId = await getDefaultModeId();

    // Check if saving variables is enabled
    if (saveColorVariables) {
      // Check if there is a variable for this swatch
      let swatchVariable;
      if (variableId != null) {
        // Variable ID found, get the swatch object
        swatchVariable = await figma.variables.getVariableById(variableId);
      } else {
        // No variable ID found, create a new one
        swatchVariable = await colorVariableFactory(
          swatch.index,
          paletteCollection,
          palette.name
        );
        // Assign swatch color to the variable
        await swatchVariable?.setValueForMode(defaultModeId, {
          r: swatch.rgb[0] / 255,
          g: swatch.rgb[1] / 255,
          b: swatch.rgb[2] / 255,
        });
        // Update variable ID
        variableId = swatchVariable.id;
      }
    } else {
      // Saving variables is disabled, if one exists remove it
      if (variableId === null) {
        figma.variables.getVariableById(variableId)?.remove();
      }
    }
    // Return variable ID to be recorded in our swatch
    return variableId;
  };

  // Create a new palette
  const newPaletteFromHex = async (hex: string) => {
    console.log("CREATING A NEW PALETTE");
    // Create a placeholder palette object
    let paletteId = nanoid();
    let placeholderPalette = {
      id: paletteId,
      temporaryHex: hex,
    };
    // Add placeholder color to list
    await addToList("paletteList", placeholderPalette);
    postPalettesToUI();
    // Generate colors & info from hex
    let generatedPalette = await generateColors(
      hex,
      16,
      "",
      paletteId,
      true,
      await colorNamesInUse()
    );
    // Build new palette and save to plugin data
    let newPalette = {
      name: generatedPalette?.name,
      id: paletteId,
      sourceColorIndex: generatedPalette?.sourceColorIndex,
      sourceColorId:
        generatedPalette?.swatches[generatedPalette?.sourceColorIndex].id,
    };
    await updateListById("paletteList", paletteId, newPalette);
    // Loop through saving swatches and variable placeholders
    let paletteCollection = await getPaletteCollection();
    for (
      let swatchIndex = 0;
      swatchIndex < generatedPalette.swatches.length;
      swatchIndex++
    ) {
      // select a swatch
      let swatch = generatedPalette.swatches[swatchIndex];
      // Create a new placeholder variable and get its ID
      let swatchVariable = await colorVariableFactory(
        swatch.index,
        paletteCollection,
        generatedPalette?.name
      );
      console.log("WE GOT A SWATCH VARIABLE", swatchVariable);
      // Add swatch to plugin data
      await addToList("swatchList", {
        ...swatch,
        colorVariableId: swatchVariable.id,
        paletteId: paletteId,
      });
    }
    // Finalize swatch variables with names and colors
    await updateSwatchVariableNames();
    await updateSwatchVariableColors();
  };

  // Update an existing palette by supplying a new hex seed color and ID
  const updatePaletteColorsById = async (paletteId: string, hex: string) => {
    // Get existing palette
    let existingPalette = await getListItemById(paletteId, "paletteList");
    let existingPaletteSwatches = await getListItemsByKeyValue(
      "swatchList",
      "paletteId",
      paletteId
    );
    // Generate colors & info from hex
    let generatedPalette = await generateColors(
      hex,
      16,
      existingPalette.name,
      paletteId,
      true,
      await colorNamesInUse()
    );
    // Get source color ID
    let existingSourceColorSwatch = await _.find(
      existingPaletteSwatches,
      (swatch: any) => {
        return swatch.index === generatedPalette.sourceColorIndex;
      }
    );
    let existingSourceColorSwatchId = existingSourceColorSwatch
      ? existingSourceColorSwatch.id
      : null;
    // Update the existing palette
    let updatedPalette = {
      id: paletteId,
      name: generatedPalette.name,
      sourceColorIndex: generatedPalette.sourceColorIndex,
      sourceColorId: existingSourceColorSwatchId,
    };
    await updateListById("paletteList", paletteId, updatedPalette);
    // Get swatches associated with this palette
    let existingSwatches = await getListItemsByKeyValue(
      "swatchList",
      "paletteId",
      paletteId
    );
    // console.log("GET READY FOR SWATCH UPDATES", existingSwatches, paletteId);
    // Loop through swatches and replace with newly generated swatches
    for (
      let swatchIndex = 0;
      swatchIndex < existingSwatches.length;
      swatchIndex++
    ) {
      let existingSwatch = existingSwatches[swatchIndex];
      let generatedSwatch = generatedPalette.swatches[swatchIndex];
      // Update saved swatch object
      let updatedSwatch = {
        ...generatedSwatch,
        id: existingSwatch.id,
        colorVariableId: existingSwatch.colorVariableId,
        paletteId: generatedPalette.id,
      };
      console.log("TIME TO UPDATE A SWATCH", existingSwatch, updatedSwatch);
      await updateListById("swatchList", existingSwatch.id, updatedSwatch);
    }
    // let updatedSwatches = await getList("swatchList");
    await updateSwatchVariableColors();
    await updateSwatchVariableNames();
    await postPalettesToUI();
  };

  // Update an existing palette by supplying a new hex seed color and ID
  const updatePaletteNameById = async (paletteId: string, name: string) => {
    // console.log("UPDATING PALETTE NAME", paletteId, name);
    // Get existing palette
    let existingPalette = await getListItemById(paletteId, "paletteList");
    // Update the existing palette
    let updatedPalette = {
      ...existingPalette,
      name: name,
    };
    // console.log("UPDATED PALETTE DATA", updatedPalette);
    await updateListById("paletteList", paletteId, updatedPalette);
    // Finalize palette names for swatch variables
    await updateSwatchVariableNames();
  };

  // Update an existing palette by supplying a new hexidecimal seed color and an optional name
  const updatePaletteById = async (
    paletteId: string,
    hex: string,
    name: string
  ) => {
    // Use autogenerated name if one isn't provided
    let paletteName = name ? name : "";
    // Generate colors & info from hex
    let generatedPalette = await generateColors(
      hex,
      16,
      paletteName,
      paletteId,
      true,
      await colorNamesInUse()
    );
    // Get swatches associated with this palette
    let existingSwatches = await getListItemsByKeyValue(
      "swatchList",
      "paletteId",
      paletteId
    );

    // Update the saved palette object
    updateListById("paletteList", paletteId, {
      id: paletteId,
      name: paletteName,
      sourceColorIndex: generatedPalette.sourceColorIndex,
      sourceColorId:
        generatedPalette.swatches[generatedPalette.sourceColorIndex].id,
    });

    // Loop through each swatch to update saved swatch objects and corresponding variables
    each(
      generatedPalette.swatches,
      async (generatedSwatch: any, index: number) => {
        // Get the existing swatch and find the variable ID
        let existingSwatch = await find(existingSwatches, (swatch: any) => {
          return swatch.index === index;
        });
        let variableId = existingSwatch.colorVariableId;
        // Update the existing color variable
        await updateSwatchVariable(
          generatedSwatch,
          paletteId,
          variableId,
          saveColorVariables
        );
        // Update saved swatch object
        let updatedSwatch = {
          ...generatedSwatch,
          id: existingSwatch.id,
          colorVariableId: variableId,
        };
        updateListById("swatchList", existingSwatch.id, updatedSwatch);
      }
    );
  };

  // Get colors from the current Figma selection
  let selectionColors: any = [];
  let deepColorSample = true;
  const getColors = async (selection: any) => {
    for (var i = 0; i < selection.length; i++) {
      let object = selection[i];
      if (object.children && deepColorSample) {
        getColors(object.children);
      }
      if (object && object.fills) {
        for (var f = 0; f < object.fills.length; f++) {
          let fill = object.fills[f];
          if (fill.color) {
            selectionColors.push(
              `#${await convertRgbColorToHexColor(fill.color)}`
            );
          }
          if (fill.gradientStops) {
            for (var s = 0; s < fill.gradientStops.length; s++) {
              let stop = fill.gradientStops[s];
              selectionColors.push(
                `#${await convertRgbColorToHexColor(stop.color)}`
              );
              // selectionColors = [...selectionColors, stop.color];
            }
          }
        }
      }
    }
    // Make sure to return a list of unique hex codes
    return uniq(selectionColors);
  };

  // // Updating selection colors retrieval now that figma.getSelectionColors exists
  let getSelectionColors = () => {
    let currentSelectionPaints = figma.getSelectionColors();
    let solidPaints = _.filter(currentSelectionPaints?.paints, (paint: any) => {
      return paint.type === "SOLID";
    });
    let currentSelectionColors = _.map(solidPaints, (paint: any) => {
      return `#${convertRgbColorToHexColor(paint.color)}`;
    });
    console.log(
      "PAINTS",
      currentSelectionPaints?.paints,
      currentSelectionColors
    );
    // return currentSelectionColors;
    return currentSelectionColors;
  };

  // Get hex color for a variable by Variable ID
  const getVariableColorById = async (variableId: string) => {
    // Get rgba data from the variable matching this swatch
    let colorVariableData = await figma.variables.getVariableById(variableId);
    // Get the ID for our default variable mode
    let defaultModeId = await getDefaultModeId();
    // Get rgba data for color variable
    let variableRgba = colorVariableData?.valuesByMode[defaultModeId] as any;
    // // return the hex code for variable's color
    return `#${convertRgbColorToHexColor(variableRgba)}`;
  };

  // Map the current variable colors to saved palettes
  const mapVariablesToSwatches = async () => {
    let currentSwatches = await getList("swatchList");
    // Traverse palettes and add in up-to-date color variable data
    let swatchIndex = 0;
    for await (let swatch of currentSwatches) {
      // Save the hex value for our up-to-date variable back into the swatch
      let variableColor = await getVariableColorById(swatch.colorVariableId);
      currentSwatches[swatchIndex].variableColor = variableColor;
      swatchIndex++;
    }
    return currentSwatches;
  };

  // Post latest seed colors to the UI
  const postPalettesToUI = async () => {
    let palettes = await getList("paletteList");
    let swatches = await mapVariablesToSwatches();
    // Send data to the UI
    figma.ui.postMessage({
      type: "receive-palettes",
      palettes,
      swatches,
    });
  };

  const postConfigToUI = async () => {
    let configData = await getConfig();
    figma.ui.postMessage({
      type: "receive-config",
      configData,
    });
  };

  // Get variable color value from swatch
  const getColorFromSwatch = async (swatch: any) => {
    let defaultModeId = await getDefaultModeId();
    let variable = await figma.variables.getVariableById(
      swatch.colorVariableId
    );
    let variableColor = variable?.valuesByMode[defaultModeId];
    let variableHex = await `#${convertRgbColorToHexColor(
      variableColor as any
    )}`;
    return variableHex;
  };

  // Update variables from saved palettes
  const updateVariables = async () => {
    // Get existing color palettes list
    let existingSwatches = await getList("swatchList");

    // Get palette variable collection info
    let paletteCollection = await getPaletteCollection();
    let defaultModeId = await getDefaultModeId();

    // Update variables for each swatch
    for (
      let swatchIndex = 0;
      swatchIndex < existingSwatches.length;
      swatchIndex++
    ) {
      let currentSwatch = existingSwatches[swatchIndex];
      await updateSwatchVariable(
        currentSwatch,
        currentSwatch.paletteId,
        currentSwatch.colorVariableId,
        saveColorVariables
      );
    }
  };

  const removeColorById = async (paletteId: string) => {
    // Remove palette from saved plugin data
    await removeFromListById("paletteList", paletteId);
    let relatedSwatches = await getListItemsByKeyValue(
      "swatchList",
      "paletteId",
      paletteId
    );
    // Remove saved swatches from saved plugin data
    for (
      let swatchIndex = 0;
      swatchIndex < relatedSwatches.length;
      swatchIndex++
    ) {
      let currentSwatch = relatedSwatches[swatchIndex];
      await figma.variables
        .getVariableById(currentSwatch.colorVariableId)
        ?.remove();
      await removeFromListById("swatchList", currentSwatch.id);
    }
  };

  // PLUGIN STATE MANAGEMENT

  // Post initial data to UI on plugin open
  const initPlugin = async () => {
    // Check if previous collection still exists
    let previousCollection = await getPaletteCollection();
    console.log(
      "DOES THE PREVIOUS COLLECTION STILL EXIST?",
      previousCollection
    );
    await figma.ui.postMessage({
      type: "init-plugin",
      // selectionColors: await getColors(figma.currentPage.selection), // Legacy method before getSelectionColors existed
      selectionColors: await getSelectionColors(),
      // selectionColors: [],
      pageColors: await getColors(figma.currentPage.children),
      fileName: figma.root.name,
    });
    await postConfigToUI();
    await postPalettesToUI();
  };
  // Run Once
  initPlugin();

  // Recieve messages from the UI
  figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
      case "reset-data":
        console.log("RESETTING ALL PLUGIN DATA");
        // Remove all plugin data just in case
        let paletteCollection = await getPaletteCollection();
        await setData("paletteList", []);
        await setData("swatchList", []);
        await setData("paletteerConfig", "");
        postPalettesToUI();
        postConfigToUI();
        await paletteCollection.remove();
        updateSwatchVariableColors();

        break;

      case "window-size":
        // setWindowSize(msg.windowSize);
        let windowSize =
          msg.windowSize === "small"
            ? { width: 200, height: 600 }
            : { width: 900, height: 600 };
        figma.ui.resize(windowSize.width, windowSize.height);
        break;

      case "add-color":
        await getPaletteCollection();
        await newPaletteFromHex(msg.hex);
        postPalettesToUI();
        break;

      case "remove-color":
        await getPaletteCollection();
        await removeColorById(msg.paletteId);
        postPalettesToUI();
        break;

      case "update-palette":
        await getPaletteCollection();
        await updatePaletteById(msg.paletteId, msg.hex, msg.name);
        postPalettesToUI();
        break;

      case "update-palette-color":
        await getPaletteCollection();
        await updatePaletteColorsById(msg.paletteId, msg.hex);
        postPalettesToUI();
        break;

      case "update-variables":
        await getPaletteCollection();
        await updateVariables();
        postPalettesToUI();
        break;

      case "update-palette-name":
        await getPaletteCollection();
        await updatePaletteNameById(msg.paletteId, msg.name);
        postPalettesToUI();
        break;

      case "get-variable-color":
        await getColorFromSwatch(msg.swatch);
        break;

      case "get-config":
        await getConfig();
        break;

      case "set-config":
        let configData = await setConfig(msg.key, msg.value);
        break;

      case "generate-style-guide":
        figma.notify(
          "Paletteer has generated swatches and example components to help get you started!"
        );
        break;

      case "close-plugin":
        figma.closePlugin();
        break;

      default:
      // figma.closePlugin();
    }
  };
}
