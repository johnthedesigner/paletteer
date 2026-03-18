import {
  convertRgbColorToHexColor,
  showUI,
} from "@create-figma-plugin/utilities";
import { filter, find, each, uniq, remove } from "lodash";
import { nanoid } from "nanoid/non-secure";
import _ from "lodash";

import generateColors from "../utils/generateColors";
import crayolaColors from "../utils/crayolaColors";
import { getTailwindScale } from "./utils/tailwindScale";
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
    steps: number,
    paletteCollection: any,
    paletteName: string
  ) => {
    let scaleValue = getTailwindScale(steps, index);
    let colorVariable = await figma.variables.createVariable(
      `${paletteName}/${scaleValue}`, // Name variables upon creation, ex. 'palette name/500'
      paletteCollection,
      "COLOR"
    );
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
          let scaleValue = getTailwindScale(swatch.steps, swatch.index);
          let updatedName = `${swatchPalette.name}/${scaleValue}`;
          let existingName = swatchVariable.name;
          if (existingName != updatedName) {
            swatchVariable.name = `${swatchPalette.name}/${scaleValue}`;
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
        // If the variable exists, update the name, otherwise do nothing
        if (swatchVariable) {
          // Assign swatch color to the variable
          await swatchVariable?.setValueForMode(defaultModeId, {
            r: swatch.rgb[0] / 255,
            g: swatch.rgb[1] / 255,
            b: swatch.rgb[2] / 255,
          });
        }
      }
    } else {
      // If we aren't saving variables anymore, look for a collection and delete it
      let existingCollection = await getPaletteCollection();
      if (existingCollection) {
        existingCollection.remove();
      }
    }
    let checkSwatchList = await getList("swatchList");
    let checkSwatch = checkSwatchList[0];
    let checkVariable = await getVariableColorById(checkSwatch.colorVariableId);
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
          swatch.steps,
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
    let configData = await getConfig();
    let stepCount = configData?.stepCount || 19; // Default to 19 if not set
    let generatedPalette = await generateColors(
      hex,
      stepCount,
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
        swatch.steps,
        paletteCollection,
        generatedPalette?.name
      );
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

  // Regenerate all existing palettes with a new step count
  const regenerateAllPalettes = async (newStepCount: number) => {
    try {
      // Update the step count in config first so updatePaletteColorsById uses the new value
      await setConfig("stepCount", newStepCount);
      
      // Get all existing palettes
      let allPalettes = await getList("paletteList");

      // Process each palette using the existing updatePaletteColorsById function
      for (let palette of allPalettes) {
        if (!palette.sourceColorId) {
          console.warn(`Palette ${palette.id} has no sourceColorId, skipping`);
          continue;
        }

        // Get the source swatch to extract the hex color
        let sourceSwatch = await getListItemById(palette.sourceColorId, "swatchList");
        if (!sourceSwatch) {
          console.warn(`Source swatch ${palette.sourceColorId} not found for palette ${palette.id}, skipping`);
          continue;
        }

        console.log(`Regenerating palette ${palette.name} with seed color ${sourceSwatch.hex}`);

        // Use the existing updatePaletteColorsById function to regenerate with new step count
        await updatePaletteColorsById(palette.id, sourceSwatch.hex);
      }

      console.log(`Successfully regenerated ${allPalettes.length} palettes`);
    } catch (error) {
      console.error("Error regenerating palettes:", error);
      figma.notify("Error regenerating palettes. Check console for details.");
    }
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
    let configData = await getConfig();
    let stepCount = configData?.stepCount || 19; // Default to 19 if not set
    let generatedPalette = await generateColors(
      hex,
      stepCount,
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
    let configData = await getConfig();
    let stepCount = configData?.stepCount || 19; // Default to 19 if not set
    let generatedPalette = await generateColors(
      hex,
      stepCount,
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

  // Get colors from the current Figma selection (batched, non-blocking version)
  let selectionColors: any = [];
  let deepColorSample = true;
  
  const getColors = async (selection: any) => {
    // Legacy synchronous version for backward compatibility
    const colorsFound: string[] = [];
    
    for (var i = 0; i < selection.length; i++) {
      let object = selection[i];
      if (object.children && deepColorSample) {
        const childColors = await getColors(object.children);
        colorsFound.push(...childColors);
      }
      if (object && object.fills) {
        for (var f = 0; f < object.fills.length; f++) {
          let fill = object.fills[f];
          if (fill.color) {
            colorsFound.push(
              `#${await convertRgbColorToHexColor(fill.color)}`
            );
          }
          if (fill.gradientStops) {
            for (var s = 0; s < fill.gradientStops.length; s++) {
              let stop = fill.gradientStops[s];
              colorsFound.push(
                `#${await convertRgbColorToHexColor(stop.color)}`
              );
            }
          }
        }
      }
    }
    // Make sure to return a list of unique hex codes
    return uniq(colorsFound);
  };

  const getColorsBatched = async (selection: any, batchSize = 100) => {
    try {
      const allColors = new Set<string>();
    const processedComponents = new Set<string>(); // Track processed component IDs globally
    let processedCount = 0;
    let skippedInstances = 0;

    // OPTIMIZATION 1: Get colors from local paint styles first (fast!)
    const extractColorsFromStyles = () => {
      const styleColors = new Set<string>();
      const paintStyles = figma.getLocalPaintStyles();
      
      paintStyles.forEach(style => {
        style.paints.forEach(paint => {
          if (paint.type === 'SOLID' && paint.color) {
            styleColors.add(`#${convertRgbColorToHexColor(paint.color)}`);
          } else if (paint.type === 'GRADIENT_LINEAR' || paint.type === 'GRADIENT_RADIAL' || paint.type === 'GRADIENT_ANGULAR' || paint.type === 'GRADIENT_DIAMOND') {
            paint.gradientStops?.forEach(stop => {
              if (stop.color) {
                styleColors.add(`#${convertRgbColorToHexColor(stop.color)}`);
              }
            });
          }
        });
      });
      
      return styleColors;
    };

    // OPTIMIZATION 2: Process nodes asynchronously with batched discovery and deduplication
    const processNodesAsync = async (rootNodes: any[]) => {
      let rootIndex = 0;
      
      const processRootNodeBatch = async () => {
        if (rootIndex >= rootNodes.length) {
          // Send final completion message
          figma.ui.postMessage({
            type: "page-colors-progress",
            colors: Array.from(allColors),
            processed: processedCount,
            skipped: skippedInstances,
            total: processedCount,
            colorsFound: allColors.size,
            isComplete: true
          });
          return;
        }

        const rootNode = rootNodes[rootIndex];
        rootIndex++;

        if (!rootNode || !rootNode.findAll) {
          // Process next root node
          return new Promise(resolve => {
            setTimeout(() => resolve(processRootNodeBatch()), 0);
          });
        }

        // Find nodes with fills/strokes in this root node
        const foundNodes = rootNode.findAll((node: any) => {
          return (node.fills && node.fills.length > 0) || 
                 (node.strokes && node.strokes.length > 0) || 
                 node.type === 'INSTANCE';
        });

        // Process found nodes in batches
        let nodeIndex = 0;
        
        const processNodeBatch = async () => {
          const batchEnd = Math.min(nodeIndex + batchSize, foundNodes.length);
          const batchColors = new Set<string>();
          let batchSkipped = 0;
          
          for (let i = nodeIndex; i < batchEnd; i++) {
            const node = foundNodes[i];
            if (!node || !node.id) continue;

            // Skip duplicate component instances
            if (node.type === 'INSTANCE' && node.mainComponent) {
              const componentId = node.mainComponent.id;
              if (processedComponents.has(componentId)) {
                batchSkipped++;
                continue;
              }
              processedComponents.add(componentId);
            }

            processedCount++;

            // Extract colors from fills
            if (node.fills && node.fills.length > 0) {
              node.fills.forEach((fill: any) => {
                if (fill.type === 'SOLID' && fill.color) {
                  batchColors.add(`#${convertRgbColorToHexColor(fill.color)}`);
                } else if (fill.type?.startsWith('GRADIENT') && fill.gradientStops) {
                  fill.gradientStops.forEach((stop: any) => {
                    if (stop.color) {
                      batchColors.add(`#${convertRgbColorToHexColor(stop.color)}`);
                    }
                  });
                }
              });
            }

            // Extract colors from strokes
            if (node.strokes && node.strokes.length > 0) {
              node.strokes.forEach((stroke: any) => {
                if (stroke.type === 'SOLID' && stroke.color) {
                  batchColors.add(`#${convertRgbColorToHexColor(stroke.color)}`);
                }
              });
            }
          }

          // Add batch colors to main set
          batchColors.forEach(color => allColors.add(color));
          skippedInstances += batchSkipped;
          nodeIndex = batchEnd;

          // Send progress update
          figma.ui.postMessage({
            type: "page-colors-progress",
            colors: Array.from(allColors),
            processed: processedCount,
            skipped: skippedInstances,
            total: processedCount + skippedInstances,
            colorsFound: allColors.size,
            isComplete: false
          });

          // Continue with next batch or move to next root node
          if (nodeIndex < foundNodes.length) {
            return new Promise(resolve => {
              setTimeout(() => resolve(processNodeBatch()), 0);
            });
          } else {
            // Move to next root node
            return new Promise(resolve => {
              setTimeout(() => resolve(processRootNodeBatch()), 0);
            });
          }
        };

        // Start processing nodes for this root
        if (foundNodes.length > 0) {
          return processNodeBatch();
        } else {
          // No nodes found, move to next root
          return new Promise(resolve => {
            setTimeout(() => resolve(processRootNodeBatch()), 0);
          });
        }
      };

      // Start processing root nodes
      return processRootNodeBatch();
    };

    // Start with colors from paint styles (instant)
    const styleColors = extractColorsFromStyles();
    styleColors.forEach(color => allColors.add(color));

    // Send initial style colors immediately
    figma.ui.postMessage({
      type: "page-colors-progress", 
      colors: Array.from(allColors),
      processed: 0,
      skipped: 0,
      total: 0,
      colorsFound: allColors.size,
      isComplete: false
    });

    // Process all nodes asynchronously
    await processNodesAsync(selection);

    return Array.from(allColors);
    } catch (error) {
      console.error('Error in getColorsBatched:', error);
      figma.ui.postMessage({
        type: "page-colors-progress", 
        colors: [],
        processed: 0,
        skipped: 0,
        total: 0,
        colorsFound: 0,
        isComplete: true,
        error: 'Failed to extract colors'
      });
      return [];
    }
  };

  // // Updating selection colors retrieval now that figma.getSelectionColors exists
  let getSelectionColors = () => {
    try {
      let currentSelectionPaints = figma.getSelectionColors();
      let solidPaints = _.filter(currentSelectionPaints?.paints, (paint: any) => {
        return paint.type === "SOLID";
      });
      let currentSelectionColors = _.map(solidPaints, (paint: any) => {
        return `#${convertRgbColorToHexColor(paint.color)}`;
      });
      // Deduplicate colors before returning
      return uniq(currentSelectionColors);
    } catch (error) {
      console.error('Error getting selection colors:', error);
      return [];
    }
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
    try {
      let palettes = await getList("paletteList");
      let swatches = await mapVariablesToSwatches();
      // Send data to the UI
      figma.ui.postMessage({
        type: "receive-palettes",
        palettes,
        swatches,
      });
    } catch (error) {
      console.error('Error posting palettes to UI:', error);
    }
  };

  const postConfigToUI = async () => {
    try {
      let configData = await getConfig();
      // Initialize default config if none exists
      if (!configData) {
        configData = { stepCount: 19 };
        await setConfig("stepCount", 19);
      } else if (!configData.stepCount) {
        // Ensure stepCount exists
        configData.stepCount = 19;
        await setConfig("stepCount", 19);
      }
      figma.ui.postMessage({
        type: "receive-config",
        configData,
      });
    } catch (error) {
      console.error('Error posting config to UI:', error);
    }
  };

  // Get variable color value from swatch
  const getColorFromSwatch = async (swatch: any) => {
    try {
      let defaultModeId = await getDefaultModeId();
      let variable = await figma.variables.getVariableById(
        swatch.colorVariableId
      );
      let variableColor = variable?.valuesByMode[defaultModeId];
      let variableHex = `#${convertRgbColorToHexColor(
        variableColor as any
      )}`;
      return variableHex;
    } catch (error) {
      console.error('Error getting color from swatch:', error);
      return swatch.hex || '#000000'; // Fallback color
    }
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
      pageColors: [], // Page colors now loaded on-demand
      fileName: figma.root.name,
    });
    await postConfigToUI();
    await postPalettesToUI();
  };
  // Run Once
  initPlugin();

  // Listen for selection changes and update selection colors in real-time
  figma.on('selectionchange', async () => {
    try {
      const newSelectionColors = await getSelectionColors();
      figma.ui.postMessage({
        type: "selection-colors-updated",
        selectionColors: newSelectionColors,
      });
    } catch (error) {
      console.error('Error in selectionchange handler:', error);
    }
  });

  // Recieve messages from the UI
  figma.ui.onmessage = async (msg) => {
    try {
      switch (msg.type) {
      case "reset-data":
        console.log("RESETTING ALL PLUGIN DATA");
        // Remove all plugin data just in case
        let paletteCollection = await getPaletteCollection();
        await paletteCollection.remove();
        await setData("paletteList", []);
        await setData("swatchList", []);
        await setData("paletteerConfig", "");
        await postPalettesToUI();
        await postConfigToUI();
        // updateSwatchVariableColors();

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
        await postPalettesToUI();
        break;

      case "remove-color":
        await getPaletteCollection();
        await removeColorById(msg.paletteId);
        await postPalettesToUI();
        break;

      case "update-palette":
        await getPaletteCollection();
        await updatePaletteById(msg.paletteId, msg.hex, msg.name);
        await postPalettesToUI();
        break;

      case "update-palette-color":
        await getPaletteCollection();
        await updatePaletteColorsById(msg.paletteId, msg.hex);
        await postPalettesToUI();
        break;

      case "update-variables":
        await getPaletteCollection();
        await updateVariables();
        await postPalettesToUI();
        break;

      case "update-palette-name":
        await getPaletteCollection();
        await updatePaletteNameById(msg.paletteId, msg.name);
        await postPalettesToUI();
        break;

      case "get-variable-color":
        await getColorFromSwatch(msg.swatch);
        break;

      case "get-config":
        await getConfig();
        break;

      case "set-config":
        let configData = await setConfig(msg.key, msg.value);
        // Post updated config back to UI
        await postConfigToUI();
        break;

      case "get-page-colors":
        // Extract page colors using batched, non-blocking approach
        try {
          await getColorsBatched(figma.currentPage.children);
        } catch (error) {
          console.error('Error getting page colors:', error);
        }
        break;

      case "generate-style-guide":
        figma.notify(
          "Paletteer has generated swatches and example components to help get you started!"
        );
        break;

      case "regenerate-all-palettes":
        console.log("Regenerating all palettes with new step count:", msg.stepCount);
        await regenerateAllPalettes(msg.stepCount);
        await postPalettesToUI();
        figma.notify("All palettes have been regenerated!");
        break;

      case "close-plugin":
        figma.closePlugin();
        break;

      default:
      // figma.closePlugin();
    }
    } catch (error) {
      console.error('Error in message handler:', error);
      figma.notify('An error occurred. Please check the console for details.');
    }
  };
}
