import React, { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import chroma from "chroma-js";

import reducer, { initialState } from "./reducer";
import generateColors from "./utils/generateColors";
import "./style.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pageColors, selectionColors, savedSwatches, palette } = state;

  const receiveMessage = (event) => {
    dispatch(event.data.pluginMessage);
  };

  useEffect(() => {
    // Initialize the plugin by getting plugin data stored in current document
    parent.postMessage({ pluginMessage: { type: "request-palette" } }, "*");

    // Update current page & selection colors & swatches
    parent.postMessage(
      { pluginMessage: { type: "request-saved-swatches" } },
      "*"
    );
    parent.postMessage({ pluginMessage: { type: "request-page-colors" } }, "*");
    parent.postMessage(
      { pluginMessage: { type: "request-selection-colors" } },
      "*"
    );
  }, []);

  // Catch plugin messages and send them to handler
  useEffect(() => {
    window.addEventListener("message", receiveMessage);
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const handleAddGradient = (swatch) => {
    let colorHex = chroma(swatch.r * 255, swatch.g * 255, swatch.b * 255).hex();
    let gradient = generateColors(colorHex);
    let newPalette = [...palette, gradient];
    parent.postMessage(
      {
        pluginMessage: {
          type: "store-palette",
          palette: newPalette,
        },
      },
      "*"
    );
    dispatch({ type: "receive-palette", palette: newPalette });
  };

  const handleClearPalette = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "store-palette",
          palette: [],
        },
      },
      "*"
    );
    dispatch({ type: "receive-palette", palette: [] });
  };

  const deleteGradient = (swatchId) => {
    let newPalette = _.filter(palette, (swatch) => {
      return swatch.id != swatchId;
    });
    parent.postMessage(
      {
        pluginMessage: {
          type: "store-palette",
          palette: newPalette,
        },
      },
      "*"
    );
    dispatch({ type: "receive-palette", palette: newPalette });
  };

  return (
    <>
      <div className="dialog-body">
        <div className="source-colors">
          {_.map(state.selectionColors, (swatch) => {
            let buttonStyles = {
              background: chroma(
                swatch.r * 255,
                swatch.g * 255,
                swatch.b * 255
              ).hex(),
            };
            return (
              <div>
                <button
                  onClick={() => {
                    handleAddGradient(swatch);
                  }}
                  style={buttonStyles}>
                  {chroma(swatch.r * 255, swatch.g * 255, swatch.b * 255).hex()}
                </button>
              </div>
            );
          })}
        </div>
        <div className="palette-list">
          <button onClick={handleClearPalette}>Clear Palette</button>
          {_.map(palette, (gradient) => {
            return (
              <>
                <p>
                  {gradient.name}{" "}
                  <button
                    onClick={() => {
                      deleteGradient(gradient.id);
                    }}>
                    Delete Gradient
                  </button>
                </p>
                {_.map(gradient.swatches, (swatch) => {
                  let swatchStyles = {
                    background: swatch.hex,
                  };
                  return <span style={swatchStyles}>{swatch.hex}</span>;
                })}
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
