import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import _ from "lodash";

import SeedButton from "./SeedButton";
import PageColorGrid from "./PageColorGrid";
import layoutStyles from "../styles/layout.module.css";
import styles from "./SeedSidebar.module.css";
import chroma from "chroma-js";
import Icon from "./Icon";

interface SidebarProps {
  selectionColors: any;
  pageColors: any;
  pageColorsLoading: boolean;
  swatches: any;
  addSeedColor: Function;
}

const SeedSidebar = ({
  selectionColors,
  pageColors,
  pageColorsLoading,
  swatches,
  addSeedColor,
}: SidebarProps) => {
  // Hex input state and handlers
  const [hexValue, setHexValue] = useState("");
  // Page colors collapsible state
  const [isPageColorsExpanded, setIsPageColorsExpanded] = useState(false);
  
  const handleHexInput = (e: any) => {
    setHexValue(e.target.value);
  };
  
  const handleHexSubmit = () => {
    console.log("Hex submit attempted:", hexValue);
    
    let cleanHex = hexValue.trim();
    // Add # if it's missing
    if (cleanHex && !cleanHex.startsWith("#")) {
      cleanHex = "#" + cleanHex;
    }
    
    // Validate hex format (with or without #)
    const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(cleanHex);
    console.log("Clean hex:", cleanHex, "Valid:", isValidHex);
    
    if (cleanHex && isValidHex) {
      console.log("Adding seed color:", cleanHex);
      addSeedColor(cleanHex);
      setHexValue("");
    } else {
      console.log("Invalid hex format");
    }
  };
  
  const handleKeyPress = (e: any) => {
    console.log("Key pressed:", e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      handleHexSubmit();
    }
  };
  
  const inputWrapperStyles = {
    position: "relative" as const,
    background: "white",
    border: "#CCCCCC solid 1px",
    borderRadius: ".375rem",
    display: "flex",
    flexDirection: "row" as const,
    marginBottom: "1rem",
  };
  
  const inputFieldStyles = {
    padding: ".5rem",
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    boxSizing: "border-box" as const,
    fontSize: "14px",
    pointerEvents: "auto" as const,
    cursor: "text",
    color: "#000000",
  };
  
  const inputButtonStyles = {
    background: "none",
    color: "black",
    border: "none",
    padding: ".5rem",
    cursor: "pointer",
  };

  const collapsibleHeaderStyles = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "0.5rem",
    marginBottom: "0",
  };

  const chevronStyles = {
    transform: isPageColorsExpanded ? "rotate(90deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
    color: "currentColor",
  };

  const chevronIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={chevronStyles}>
      <path
        d="M4.5 3L7.5 6L4.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  let orderedSelectionColors = _.orderBy(
    selectionColors,
    (color: any) => {
      return chroma(color).hsl()[0];
    },
    "desc"
  );
  let orderedPageColors = _.orderBy(
    _.xor(pageColors, selectionColors),
    (color: any) => {
      return chroma(color).hsl()[0];
    },
    "desc"
  );
  let extraPageColors = ["#FE5D47", "#EBC850", "#08E3D6", "#3785FB", "#E1BFFF"];
  return (
    <>
      <p className={layoutStyles["sidebar-title"]}>
        Choose brand colors to build your color palette.
      </p>
        <span className={styles["seed-list__label"]}>
          Add a Color
        </span>
      <div style={inputWrapperStyles}>
        <input
          type="text"
          placeholder="Enter hex code (#FF0000)"
          value={hexValue}
          onChange={handleHexInput}
          onKeyPress={handleKeyPress}
          style={inputFieldStyles}
        />
        <button
          style={inputButtonStyles}
          onClick={handleHexSubmit}>
          <Icon type="right-arrow" iconColor="rgb(12, 142, 241)" />
        </button>
      </div>
      <>
        <span className={styles["seed-list__label"]}>
          From Your Selection
        </span>
        {orderedSelectionColors.length > 0 ? (
          <div className={styles["seed-list"]}>
            {_.map(orderedSelectionColors, (color: any) => {
              return (
                <SeedButton
                  color={color}
                  swatches={swatches}
                  addSeedColor={addSeedColor}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles["empty-state"]}>
            Select objects to see their colors here
          </div>
        )}
      </>
      
      {/* Page Colors Section */}
      <div
        style={collapsibleHeaderStyles}
        onClick={() => setIsPageColorsExpanded(!isPageColorsExpanded)}>
        {chevronIcon}
        <span className={styles["seed-list__label"]}>
          From This File ({orderedPageColors.length})
          {pageColorsLoading && (
            <span className={styles.spinner}></span>
          )}
        </span>
      </div>
      
      {isPageColorsExpanded && (
        <>
          {orderedPageColors.length > 0 ? (
            <PageColorGrid
              pageColors={orderedPageColors}
              swatches={swatches}
              addSeedColor={addSeedColor}
            />
          ) : (
            <div className={styles["empty-state"]}>
              {pageColorsLoading ? "Loading colors..." : "No colors found in this file"}
            </div>
          )}
        </>
      )}
      
      {/* Example Colors Section */}
      {orderedPageColors.length + orderedSelectionColors.length === 0 && (
        <>
          <span className={styles["seed-list__label"]}>Example colors</span>
          <div className={styles["seed-list"]}>
            {_.map(extraPageColors, (color: any) => {
              return (
                <SeedButton
                  color={color}
                  swatches={swatches}
                  addSeedColor={addSeedColor}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default SeedSidebar;
