import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";
import _ from "lodash";

import "!./styles.css";
import Header from "./components/Header";
import ColorPicker from "./components/ColorPickerSidebar";
import PalettesList from "./components/PalettesList";
import Button from "./components/Button";
import Palettes from "./views/Palettes";
import Edit from "./views/Edit";
import Tokens from "./views/Tokens";

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
};

function Plugin() {
  const [initComplete, setInitComplete] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectionColors, setSelectionColors] = useState([]);
  const [pageColors, setPageColors] = useState([]);
  const [palettes, setPalettes] = useState([]);
  const [config, setConfig] = useState({
    stepCount: 16,
  });

  // Manage view modes
  const [currentView, setCurrentView] = useState("palettes");
  const [selectedPaletteId, setSelectedPaletteId] = useState("");
  // Select a palette and open edit view
  const editPalette = async (paletteId: string) => {
    setSelectedPaletteId(paletteId);
    setCurrentView("edit");
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
    parent.postMessage(
      {
        pluginMessage: {
          type: "add-color",
          hex,
        },
      },
      "*"
    );
  };

  const removeSeedColor = async (hex: string) => {
    // Remove seed color by hex
    parent.postMessage(
      {
        pluginMessage: {
          type: "remove-color",
          hex,
        },
      },
      "*"
    );
  };

  const getColorForSwatch = (swatch: any) => {
    // Send new color to plugin back end
    parent.postMessage(
      {
        pluginMessage: {
          type: "get-variable-color",
          swatch,
        },
      },
      "*"
    );
  };

  const updatePalette = async (hex: string, paletteId: string) => {
    // Supply updated palette
    parent.postMessage(
      {
        pluginMessage: {
          type: "update-palette",
          hex,
          paletteId,
        },
      },
      "*"
    );
  };

  const updateName = async (paletteId: string, name: string) => {
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
          _.each(pluginMessage.palettes[0].swatches, (swatch: any) => {
            getColorForSwatch(swatch);
          });
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
        {currentView === "palettes" && (
          <Palettes
            fileName={fileName}
            palettes={palettes}
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
            selectedPaletteId={selectedPaletteId}
            setCurrentView={setCurrentView}
            updatePalette={updatePalette}
            updateName={updateName}
          />
        )}
        {currentView === "tokens" && (
          <Tokens palettes={palettes} setCurrentView={setCurrentView} />
        )}
      </div>
    </>
  );
}

export default render(Plugin);
