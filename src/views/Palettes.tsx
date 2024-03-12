import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import ColorPicker from "../components/ColorPickerSidebar";
import PalettesList from "../components/PalettesList";
import Button from "../components/Button";

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

interface IProps {
  fileName: string;
  palettes: any;
  selectionColors: any;
  pageColors: any;
  updateConfig: Function;
  addSeedColor: Function;
  removeSeedColor: Function;
  resetData: Function;
  setCurrentView: Function;
  editPalette: Function;
}

const Palettes = ({
  fileName,
  palettes,
  selectionColors,
  pageColors,
  updateConfig,
  addSeedColor,
  removeSeedColor,
  resetData,
  setCurrentView,
  editPalette,
}: IProps) => {
  return (
    <>
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
              editPalette={editPalette}
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
                onClick={() => setCurrentView("tokens")}
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
                Palettes saved to variablesXXX
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
    </>
  );
};

export default Palettes;
