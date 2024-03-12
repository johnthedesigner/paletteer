import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";

import Button from "../components/Button";

interface IProps {
  palettes: any;
  setCurrentView: Function;
}

const Tokens = ({ palettes, setCurrentView }: IProps) => {
  const editContainerStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  };

  const editSidebarStyles = {
    display: "flex",
    flexDirection: "column",
    width: "14rem",
    borderRight: "#EEE solid 1px" /* TODO: Replace with color token */,
  };

  const editBodyStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div style={editContainerStyles}>
        <div style={editSidebarStyles}>
          <div style={{ padding: "1rem" }}>
            <Button
              buttonType="secondary"
              text="Back to palettes"
              onClick={() => setCurrentView("palettes")}
            />
          </div>
        </div>
        <div style={editBodyStyles}>Token Editor</div>
      </div>
    </>
  );
};

export default Tokens;
