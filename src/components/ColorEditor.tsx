import { h, Fragment } from "preact";
import { useEffect, useState } from "react";
import _ from "lodash";
import chroma from "chroma-js";

import Text from "./Text";
import Icon from "./Icon";

interface IProps {
  palette: any;
  updatePalette: Function;
  updateName: Function;
}

const ColorEditor = ({ palette, updatePalette, updateName }: IProps) => {
  // Set up Name editing
  const [nameValue, setNameValue] = useState(palette.name);
  var timeout: any;
  const handleNameUpdate = (e: any) => {
    let inputValue = e.target.value;
    setNameValue(inputValue);
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      updateName(palette.id, inputValue);
    }, 5);
  };

  // Set up Hex code editing
  const [hexValue, setHexValue] = useState(
    palette.swatches[palette.sourceColorIndex].variableColor
  );
  const handleHexInput = (e: any) => {
    let inputValue = e.target.value;
    setHexValue(inputValue);
  };
  const handleHexUpdate = () => {
    updatePalette(hexValue, palette.id);
  };
  // When palette is updated, refresh source hex color value
  useEffect(() => {
    setHexValue(palette.swatches[palette.sourceColorIndex].variableColor);
  }, [palette]);

  // Set up color adjustments
  const seedHex = palette.swatches[palette.sourceColorIndex].variableColor;
  const seedChroma = chroma(seedHex);
  // Set how many adjustment options there are above and below existing color
  const adjustmentOptionCount = 8;

  const textInputStyles = {
    border: "#DDD solid 1px",
    borderRadius: ".375rem",
    padding: ".5rem",
  };

  const inputWrapperStyles = {
    position: "relative",
    background: "white",
    border: "#CCCCCC solid 1px",
    borderRadius: ".375rem",
    display: "flex",
    flexDirection: "row",
  };

  const inputFieldStyles = {
    padding: ".5rem",
    flex: 1,
    background: "none",
    border: "none",
    boxSizing: "border-box",
  };

  const inputButtonStyles = {
    background: "none",
    color: "black",
  };

  const adjustmentContentStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
  };

  const adjustmentInputGroupStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: ".375rem",
  };

  const adjustmentStripStyles = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: ".375rem",
    overflow: "hidden",
  };

  const adjustmentStepStyles = (color: string) => {
    return {
      display: "block",
      flex: "1 1 auto",
      background: color,
      borderRadius: "0",
      padding: 0,
      boxSizing: "border-box",
      height: "2rem",
    };
  };

  const handleFocus = (e: any) => {
    e.target.select();
  };

  return (
    <div style={adjustmentContentStyles}>
      <div style={adjustmentInputGroupStyles}>
        <Text type="text" size="small">
          Name
        </Text>
        <input
          style={textInputStyles}
          type="text"
          value={nameValue}
          onChange={handleNameUpdate}
          onFocus={handleFocus}
        />
      </div>
      <div style={adjustmentInputGroupStyles}>
        <Text type="text" size="small">
          Hex Code
        </Text>
        <div style={inputWrapperStyles}>
          <input
            type="text"
            placeholder="#FF0000"
            value={hexValue}
            onChange={handleHexInput}
            style={inputFieldStyles}
          />
          <button
            style={inputButtonStyles}
            className="color-picker__submit-button"
            onClick={handleHexUpdate}>
            <Icon type="right-arrow" iconColor="rgb(12, 142, 241)" />
          </button>
        </div>
      </div>
      <div style={adjustmentInputGroupStyles}>
        <Text type="text" size="small">
          RGB Adjustment
        </Text>
        <div style={adjustmentStripStyles}>
          {_.times(adjustmentOptionCount * 2 + 1, (index) => {
            let increment = 10;
            let offset = -1 * adjustmentOptionCount * increment;
            let currentDelta = index * increment + offset;
            let newHexColor = chroma
              .rgb(
                seedChroma.get("rgb.r") + currentDelta,
                seedChroma.get("rgb.g"),
                seedChroma.get("rgb.b")
              )
              .hex();

            return (
              <button
                style={adjustmentStepStyles(newHexColor)}
                onClick={() => updatePalette(newHexColor, palette.id)}>
                {index === adjustmentOptionCount && (
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.22217" cy="5" r="5" fill="white" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
        <div style={adjustmentStripStyles}>
          {_.times(adjustmentOptionCount * 2 + 1, (index) => {
            let increment = 10;
            let offset = -1 * adjustmentOptionCount * increment;
            let currentDelta = index * increment + offset;
            let newHexColor = chroma
              .rgb(
                seedChroma.get("rgb.r"),
                seedChroma.get("rgb.g") + currentDelta,
                seedChroma.get("rgb.b")
              )
              .hex();

            return (
              <button
                style={adjustmentStepStyles(newHexColor)}
                onClick={() => updatePalette(newHexColor, palette.id)}>
                {index === adjustmentOptionCount && (
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.22217" cy="5" r="5" fill="white" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
        <div style={adjustmentStripStyles}>
          {_.times(adjustmentOptionCount * 2 + 1, (index) => {
            let increment = 30;
            let offset = -1 * adjustmentOptionCount * increment;
            let currentDelta = index * increment + offset;
            let newHexColor = chroma
              .rgb(
                seedChroma.get("rgb.r"),
                seedChroma.get("rgb.g"),
                seedChroma.get("rgb.b") + currentDelta
              )
              .hex();

            return (
              <button
                style={adjustmentStepStyles(newHexColor)}
                onClick={() => updatePalette(newHexColor, palette.id)}>
                {index === adjustmentOptionCount && (
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.22217" cy="5" r="5" fill="white" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorEditor;
