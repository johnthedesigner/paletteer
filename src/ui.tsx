import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";
import _ from "lodash";

import "!./styles.css";
import Palettes from "./views/Palettes";
import Edit from "./views/Edit";
import Tokens from "./views/Tokens";
import Seeds from "./views/Seeds";
import Editor from "./views/Editor";

// REDESIGNED VIEWS
import Palette from "./views/Palette";

function Plugin() {
  const [initComplete, setInitComplete] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectionColors, setSelectionColors] = useState([]);
  const [pageColors, setPageColors] = useState([]);
  const [palettes, setPalettes] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [config, setConfig] = useState({
    stepCount: 16,
  });
  const [paletteLoading, setPaletteLoading] = useState(false);

  useEffect(() => {
    setPaletteLoading(
      _.filter(palettes, (palette: any) => {
        // A Palette is loading if we find one with the property "temporaryHex"
        return palette.temporaryHex != undefined;
      }).length > 0
    );
  }, [palettes]);

  const modalStyles = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: paletteLoading ? "red" : "white",
  };

  // Manage view modes
  const [currentView, setCurrentView] = useState("seeds");
  const [selectedPaletteId, setSelectedPaletteId] = useState("");
  // Select a palette and open edit view
  const editPalette = async (paletteId: string) => {
    setSelectedPaletteId(paletteId);
    setCurrentView("editor");
  };

  // Send and receive plugin state messages
  const updateConfig = (key: string, value: any) => {
    // Update a single config value
    parent.postMessage(
      {
        pluginMessage: {
          type: "set-config",
          key,
          value,
        },
      },
      "*"
    );
  };

  const addSeedColor = (hex: any) => {
    // Send new color to plugin back end
    setTimeout(() => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "add-color",
            hex,
          },
        },
        "*"
      );
    }, 1);
  };

  const removeSeedColor = async (paletteId: string) => {
    // Remove seed color by hex
    parent.postMessage(
      {
        pluginMessage: {
          type: "remove-color",
          paletteId,
        },
      },
      "*"
    );
  };

  const updatePaletteColor = async (paletteId: string, hex: string) => {
    // Supply updated palette
    parent.postMessage(
      {
        pluginMessage: {
          type: "update-palette-color",
          paletteId,
          hex,
        },
      },
      "*"
    );
  };

  const updatePaletteName = async (paletteId: string, name: string) => {
    // Supply updated palette
    parent.postMessage(
      {
        pluginMessage: {
          type: "update-palette-name",
          name,
          paletteId,
        },
      },
      "*"
    );
  };

  const resetData = async () => {
    // Reset all plugin data
    parent.postMessage(
      {
        pluginMessage: {
          type: "reset-data",
        },
      },
      "*"
    );
  };

  useEffect(() => {
    const handleMessage = (e: any) => {
      let { pluginMessage } = e.data;
      switch (pluginMessage.type) {
        case "init-plugin":
          setSelectionColors(pluginMessage.selectionColors);
          setPageColors(pluginMessage.pageColors);
          setFileName(pluginMessage.fileName);
          setInitComplete(true);
          break;

        case "receive-palettes":
          setPalettes(pluginMessage.palettes);
          setSwatches(pluginMessage.swatches);
          break;

        case "receive-config":
          setConfig(pluginMessage.configData);
          break;

        default:
          console.log("received unknown message type", pluginMessage);
      }
    };

    window.onmessage = handleMessage;
  });

  return (
    <>
      <div className="modal font-text" style={modalStyles}>
        {currentView === "seeds" && (
          <Palette
            palettes={palettes}
            swatches={swatches}
            selectionColors={selectionColors}
            pageColors={pageColors}
            addSeedColor={addSeedColor}
            removeSeedColor={removeSeedColor}
            editPalette={editPalette}
            resetData={resetData}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === "seeds-old" && (
          <Seeds
            fileName={fileName}
            palettes={palettes}
            swatches={swatches}
            selectionColors={selectionColors}
            pageColors={pageColors}
            updateConfig={updateConfig}
            addSeedColor={addSeedColor}
            removeSeedColor={removeSeedColor}
            resetData={resetData}
            setCurrentView={setCurrentView}
            editPalette={editPalette}
          />
        )}
        {currentView === "palettes" && (
          <Palettes
            fileName={fileName}
            palettes={palettes}
            swatches={swatches}
            selectionColors={selectionColors}
            pageColors={pageColors}
            updateConfig={updateConfig}
            addSeedColor={addSeedColor}
            removeSeedColor={removeSeedColor}
            resetData={resetData}
            setCurrentView={setCurrentView}
            editPalette={editPalette}
          />
        )}
        {currentView === "edit" && (
          <Edit
            palettes={palettes}
            swatches={swatches}
            selectedPaletteId={selectedPaletteId}
            setCurrentView={setCurrentView}
            updatePaletteColor={updatePaletteColor}
            updatePaletteName={updatePaletteName}
          />
        )}
        {currentView === "editor" && (
          <Editor
            selectedPaletteId={selectedPaletteId}
            palettes={palettes}
            swatches={swatches}
            setCurrentView={setCurrentView}
            updatePaletteColor={updatePaletteColor}
            updatePaletteName={updatePaletteName}
          />
        )}
        {currentView === "tokens" && (
          <Tokens
            palettes={palettes}
            swatches={swatches}
            setCurrentView={setCurrentView}
          />
        )}
      </div>
    </>
  );
}

export default render(Plugin);
