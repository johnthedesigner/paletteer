// Find palette collection or initialize new one
const getPaletteCollection = async (figma: any, configData: any) => {
  // Look for palette collection ID and use it to find palette collection
  // let configData = await getConfig();
  let paletteCollectionId = configData.paletteCollectionId
    ? configData.paletteCollectionId
    : null;
  // Prepare palette collection object
  let paletteCollection: any;
  // If there isn't a palette collection ID, create a new collection
  if (paletteCollectionId === null) {
    // Create collection if it isn't there already
    paletteCollection = await figma.variables.createVariableCollection(
      "Paletteer Colors" // paletteCollectionName
    );
    // Record our new palette collection ID in plugin data
    //   await setConfig("paletteCollectionId", paletteCollection.id);
  } else {
    // If the ID isn't null, get the existing variable collection
    paletteCollection = await figma.variables.getVariableCollectionById(
      paletteCollectionId
    );
  }
  return paletteCollection;
};
