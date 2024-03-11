import { h, Fragment } from "preact";
import { useState } from "react";
import _ from "lodash";
import chroma from "chroma-js";

import Icon from "./Icon";

interface IProps {
  palettes: any;
  selectionColors: any;
  pageColors: any;
  addSeedColor: any;
}

const ColorPicker = ({
  palettes,
  selectionColors,
  pageColors,
  addSeedColor,
}: IProps) => {
  // State management for color input
  const [colorInput, setColorInput] = useState("");
  const handleInputChange = (e: any) => {
    let input = e.target.value;
    setColorInput(input);
  };
  const handleColorSubmit = () => {
    console.log(colorInput);
  };

  // Make sure page colors list excludes current selection colors
  pageColors = _.without(pageColors, ...selectionColors);
  // Sort page colors by hue
  pageColors = _.sortBy(pageColors, (color) => {
    return chroma(color).hsl()[0];
  });

  // Check if hex exists in saved seed colors
  const colorIsSaved = (color: string) => {
    let seedColorsToCompare = _.map(palettes, (palette) => {
      return palette.swatches[palette.sourceColorIndex].hex;
    });
    return _.includes(seedColorsToCompare, color);
  };

  const sideBarStyles = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflowX: "auto",
  };

  const colorPickerStyles = {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    paddingTop: "1rem",
  };

  const seedListStyles = {
    display: "flex",
    flexDirection: "column",
    gap: ".125rem",
    padding: "0 .75rem",
  };

  const sectionHeadingStyles = {
    fontSize: ".75rem",
    padding: ".375rem 1rem 0",
  };

  const colorInputSectionStyles = {
    display: "flex",
    background: "white",
    flexDirection: "column",
    bottom: 0,
    position: "sticky",
    paddingBottom: "1rem",
  };

  const inputWrapperStyles = {
    position: "relative",
    margin: ".25rem 1rem 0",
    background: "#EEEEEE",
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

  const seedColorStyles = (hoverState: boolean) => {
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: ".125rem 1rem .125rem .25rem",
      borderRadius: "1rem",
      transition: "all linear .1s",
      cursor: "pointer",
      background: hoverState ? "rgba(12, 142, 241,.1)" : "rgba(12, 142, 241,0)",
    };
  };

  const colorDotStyles = (color: string) => {
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "50%",
      border: "#EEEEEE solid 1px",
      background: color,
      color: chroma.contrast(color, "white") > 4.5 ? "white" : "black",
      cursor: "pointer",
    };
  };

  const colorHexStyles = {
    padding: "0.25rem .75rem",
    fontFamily: "Fira Mono",
    fontSize: ".75rem",
    textTransform: "uppercase",
    flex: 1,
    cursor: "pointer",
  };

  const SeedButton = ({ color }: any) => {
    const [hoverState, setHoverState] = useState(false);
    return (
      <div
        className="seed-color"
        style={seedColorStyles(hoverState)}
        onClick={() => addSeedColor(color)}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}>
        <div style={colorDotStyles(color)}>
          {colorIsSaved(color) && <Icon type="check" />}
        </div>
        <div style={colorHexStyles}>{color}</div>
        <Icon type="right-arrow" iconColor={"rgb(12, 142, 241)"} />
      </div>
    );
  };

  return (
    <div style={sideBarStyles}>
      <div className="color-picker" style={colorPickerStyles}>
        <span
          style={{ fontSize: "1rem", fontWeight: "700", padding: "0 1rem" }}>
          Choose a seed color
        </span>
        <span style={sectionHeadingStyles}>From my current selection</span>
        <div className="color-picker__selection-list" style={seedListStyles}>
          {_.map(selectionColors, (color: string) => {
            return <SeedButton color={color} />;
          })}
        </div>
        <span style={sectionHeadingStyles}>From this file</span>
        <div className="color-picker__selection-list" style={seedListStyles}>
          {_.map(pageColors, (color: string) => {
            return <SeedButton color={color} />;
          })}
        </div>
        <div style={colorInputSectionStyles}>
          <span style={sectionHeadingStyles}>From this file</span>
          <div className="color-picker__input-field">
            <div style={inputWrapperStyles}>
              <input
                type="text"
                placeholder="#FF0000"
                value={colorInput}
                onChange={handleInputChange}
                style={inputFieldStyles}
              />
              <button
                style={inputButtonStyles}
                className="color-picker__submit-button"
                onClick={handleColorSubmit}>
                <Icon type="right-arrow" iconColor="rgb(12, 142, 241)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
