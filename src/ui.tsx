import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";

// import styles from "./styles.css";
import "!./styles.css";
import Header from "./components/Header";
import ColorPicker from "./components/ColorPickerSidebar";
import PalettesList from "./components/PalettesList";
import Button from "./components/Button";

type ColorPicker = {
  selectionColors: any;
};

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

const modalHeaderStyles = {
  position: "relative",
  width: "100%",
  height: "80px",
  borderBottom: "#EEE solid 1px" /* TODO: Replace with color token */,
};

const modalMainAreaStyles = {
  flexGrow: 1,
  display: "flex",
};

const modalSidebarStyles = {
  position: "relative",
  width: "14rem",
  borderRight: "#EEE solid 1px" /* TODO: Replace with color token */,
};

const modalMainColumnStyles = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const modalBodyStyles = {
  position: "relative",
  flex: 1,
  borderBottom: "#EEE solid 1px" /* TODO: Replace with color token */,
};

const modalFooterStyles = {
  display: "flex",
  flexDirection: "row",
};

const footerActionsLeftStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
  gap: ".5rem",
};

const footerActionsRightStyles = {
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
  gap: ".5rem",
  alignItems: "center",
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
      <style
        dangerouslySetInnerHTML={{
          __html: `@import
        url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap')
        .font-text {
          font-family: "Nunito", sans-serif;
          font-optical-sizing: auto;
          font-weight:400;
          font-style: normal;
        }`,
        }}
      />
      <div className="modal font-text" style={modalStyles}>
        <div className="modal__header" style={modalHeaderStyles}>
          <Header
            fileName={fileName}
            resetData={resetData}
            updateConfig={updateConfig}
            palettes={palettes}
          />
        </div>
        <div className="modal__main-area" style={modalMainAreaStyles}>
          <div className="modal__sidebar" style={modalSidebarStyles}>
            <ColorPicker
              palettes={palettes}
              selectionColors={selectionColors}
              pageColors={pageColors}
              addSeedColor={addSeedColor}
            />
          </div>
          <div className="modal__main-column" style={modalMainColumnStyles}>
            <div className="modal__body" style={modalBodyStyles}>
              <PalettesList
                palettes={palettes}
                removeSeedColor={removeSeedColor}
              />
            </div>
            <div className="modal__footer" style={modalFooterStyles}>
              <div
                className="footer-actions__left"
                style={footerActionsLeftStyles}>
                <Button
                  buttonType="color"
                  iconType="code"
                  text="Get Tokens"
                  onClick={null}
                />
                <Button
                  buttonType="color"
                  iconType="component"
                  text="Generate Style Guide"
                  onClick={null}
                />
              </div>
              <div
                className="footer-actions__right"
                style={footerActionsRightStyles}>
                <span style={{ fontStyle: "italic" }}>
                  Palettes saved to variables
                </span>
                <Button
                  buttonType="secondary"
                  iconType="variable"
                  text="Delete color variables"
                  onClick={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default render(Plugin);
