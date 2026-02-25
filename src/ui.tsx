import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";
import _ from "lodash";

import "!./styles.css";
// import Palettes from "./views/Palettes";
// import Edit from "./views/Edit";
import Tokens from "./views/Tokens";
import Editor from "./views/Editor";

// REDESIGNED VIEWS
import Palette from "./views/Palette";
import SeedSidebar from "./components/SeedSidebar";

function Plugin() {
  const [initComplete, setInitComplete] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectionColors, setSelectionColors] = useState([]);
  const [pageColors, setPageColors] = useState([]);
  const [palettes, setPalettes] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [config, setConfig] = useState({
    stepCount: 19, // Default to 19 for complete Tailwind compatibility
  });
  const [paletteLoading, setPaletteLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageColorsLoading, setPageColorsLoading] = useState(false);
  const [colorExtractionProgress, setColorExtractionProgress] = useState({ processed: 0, total: 0, skipped: 0 });
  // Settings state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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

  // Change window size for color selection mode
  useEffect(() => {
    let windowSize = currentView === "select" ? "small" : "large";
    console.log("ON CURRENT VIEW CHANGE", currentView);
    parent.postMessage(
      {
        pluginMessage: {
          type: "window-size",
          windowSize,
        },
      },
      "*"
    );
  }, [currentView]);

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

  const handleShadesChange = (shades: number) => {
    updateConfig("stepCount", shades);
    // Trigger regeneration of all palettes with new step count
    parent.postMessage(
      {
        pluginMessage: {
          type: "regenerate-all-palettes",
          stepCount: shades,
        },
      },
      "*"
    );
  };

  const addSeedColor = (hex: any) => {
    setLoading(true);
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
          setLoading(false);
          
          // Request page colors immediately after initialization
          setPageColorsLoading(true);
          parent.postMessage(
            {
              pluginMessage: {
                type: "get-page-colors",
              },
            },
            "*"
          );
          break;

        case "page-colors-progress":
          // Handle incremental color updates
          setPageColors(pluginMessage.colors);
          setColorExtractionProgress({
            processed: pluginMessage.processed,
            total: pluginMessage.total,
            skipped: pluginMessage.skipped || 0
          });
          
          if (pluginMessage.isComplete) {
            setPageColorsLoading(false);
          }
          break;

        case "page-colors-result":
          // Legacy handler (fallback)
          setPageColors(pluginMessage.pageColors);
          setPageColorsLoading(false);
          break;

        case "receive-palettes":
          setPalettes(pluginMessage.palettes);
          setSwatches(pluginMessage.swatches);
          setLoading(false);
          break;

        case "receive-config":
          // Merge with existing config to preserve defaults
          setConfig(prevConfig => ({
            ...prevConfig,
            ...pluginMessage.configData
          }));
          break;

        case "selection-colors-updated":
          setSelectionColors(pluginMessage.selectionColors);
          break;

        default:
          console.log("received unknown message type", pluginMessage);
      }
    };

    window.onmessage = handleMessage;
  });

  const LoadingSpinner = ({ loading }: any) => {
    return (
      <div
        style={{
          display: loading ? "block" : "none",
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          zIndex: 100,
        }}>
        LOADING...
      </div>
    );
  };

  return (
    <>
      <div className="modal font-text" style={modalStyles}>
        {currentView === "seeds" && (
          <Palette
            palettes={palettes}
            swatches={swatches}
            selectionColors={selectionColors}
            pageColors={pageColors}
            pageColorsLoading={pageColorsLoading}
            isSettingsOpen={isSettingsOpen}
            setIsSettingsOpen={setIsSettingsOpen}
            numberOfShades={config.stepCount}
            onShadesChange={handleShadesChange}
            addSeedColor={addSeedColor}
            removeSeedColor={removeSeedColor}
            editPalette={editPalette}
            resetData={resetData}
            setCurrentView={setCurrentView}
          />
        )}
        {/* {currentView === "palettes" && (
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
        )} */}
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
        {/* {currentView === "select" && (
          <div style={{ padding: "1rem" }}>
            <SeedSidebar
              selectionColors={selectionColors}
              pageColors={pageColors}
              swatches={swatches}
              addSeedColor={addSeedColor}
            />
          </div>
        )} */}
        <LoadingSpinner loading={loading} />
        {pageColorsLoading && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "12px",
              zIndex: 100,
            }}>
            Extracting colors... {colorExtractionProgress.processed > 0 && 
              `${colorExtractionProgress.processed} objects`
            }{colorExtractionProgress.skipped > 0 && 
              ` (${colorExtractionProgress.skipped} skipped)`
            }{pageColors.length > 0 && 
              `, ${pageColors.length} colors`
            }
          </div>
        )}
      </div>
    </>
  );
}

export default render(Plugin);
