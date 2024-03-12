import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";
import _ from "lodash";

import Button from "../components/Button";
import Icon from "../components/Icon";
import Text from "../components/Text";

interface IProps {
  palettes: any;
  selectedPalette: any;
  setCurrentView: Function;
}

const tabContainerStyles = {
  display: "flex",
  flexDirection: "row",
  gap: "1px",
  paddingLeft: "1px",
};

const Tab = ({ tabColor, textColor, props, setSelectedTab, children }: any) => {
  const tabStyles = {
    background: tabColor,
    color: textColor,
    fontSize: ".75rem",
    fontWeight: 700,
    flex: 1,
    borderColor: "rgba(0,0,0,.2)",
    borderStyle: "solid",
    borderWidth: "1px 1px 0 1px",
    borderRadius: ".375rem .375rem 0 0",
  };
  console.log(children);
  return <button style={tabStyles}>{children}</button>;
};

const Edit = ({ palettes, selectedPalette, setCurrentView }: IProps) => {
  console.log(selectedPalette);

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
    padding: "1rem",
  };

  const demoContainerStyles = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  };

  const colorGradientWrapperStyles = {
    display: "flex",
    flexDirection: "column",
    width: "14rem",
    borderRadius: ".375rem 0 0 .375rem",
    overflow: "hidden",
  };

  const colorGradientHeaderStyles = (palette: any) => {
    let sourceColor = palette.swatches[palette.sourceColorIndex].hex;
    return {
      background: sourceColor,
      display: "flex",
      flexDirection: "column",
      gap: ".5rem",
      padding: "1rem",
    };
  };

  const colorNameStyles = {
    fontSize: "1.25rem",
    fontWeight: 700,
  };

  const colorHexStyles = {
    fontFamily: "Fira Mono",
    fontSize: "1rem",
  };

  const colorTableRowStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Fira Mono",
    textAlign: "center",
    lineHeight: 0.875,
    flex: 1,
  };

  const exampleContainerStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderRadius: " 0 .375rem .375rem 0",
    borderColor: "#DDDDDD" /* TODO: Replace with color token */,
    borderStyle: "solid",
    // borderWidth: "1px 1px 1px 0",
  };

  const exampleContentWrapperStyles = {
    flex: 1,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    borderColor: "#DDDDDD" /* TODO: Replace with color token */,
    borderStyle: "solid",
    borderWidth: "0 1px 1px 0",
    borderRadius: "0 0 .375rem 0",
  };

  // Example section tabs
  const [selectedTab, setSelectedTab] = useState(0);

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
        <div style={editBodyStyles}>
          <div style={demoContainerStyles}>
            <div style={colorGradientWrapperStyles}>
              <div style={colorGradientHeaderStyles(selectedPalette)}>
                <span style={colorNameStyles}>{selectedPalette.name}</span>
                <span style={colorHexStyles}>
                  {
                    selectedPalette.swatches[selectedPalette.sourceColorIndex]
                      .hex
                  }
                </span>
              </div>
              <div
                style={{
                  ...colorTableRowStyles,
                  background: "black",
                  color: "white",
                }}>
                <div style={{ flex: 1 }}>index</div>
                <div style={{ flex: 1 }}>Black Contrast</div>
                <div style={{ flex: 1 }}>White Contrast</div>
              </div>
              {_.map(selectedPalette.swatches, (swatch: any, index: number) => {
                return (
                  <div
                    style={{ ...colorTableRowStyles, background: swatch.hex }}>
                    <div style={{ flex: 1, color: swatch.displayColor }}>
                      {(index + 1).toFixed(0).padStart(2, "0")}
                    </div>
                    <div style={{ flex: 1, color: "black" }}>
                      {swatch.displayColor === "black" && <>&bull;</>}
                      {swatch.contrastBlack.toFixed(2)}
                    </div>
                    <div style={{ flex: 1, color: "white" }}>
                      {swatch.displayColor === "white" && <>&bull;</>}
                      {swatch.contrastWhite.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={exampleContainerStyles}>
              <div style={tabContainerStyles}>
                <Tab
                  tabColor="white"
                  textColor="black"
                  setSelectedTab={() => {
                    setSelectedTab(0);
                  }}>
                  {"Light"}
                </Tab>
                <Tab
                  tabColor="black"
                  textColor="white"
                  setSelectedTab={() => {
                    setSelectedTab(1);
                  }}>
                  {"Dark"}
                </Tab>
                <Tab
                  tabColor={selectedPalette.swatches[5].hex}
                  textColor="white"
                  setSelectedTab={() => {
                    setSelectedTab(2);
                  }}>
                  {"Color"}
                </Tab>
              </div>
              <div style={exampleContentWrapperStyles}>
                <Text type="text" size="small">
                  Buttons
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: ".5rem",
                  }}>
                  <Button
                    onClick={null}
                    text="Settings"
                    buttonType="primary"
                    iconType="settings"
                  />
                  <Button
                    onClick={null}
                    text="Generate Code"
                    buttonType="secondary"
                    iconType="code"
                  />
                  <Button
                    onClick={null}
                    text="Refresh"
                    buttonType="text"
                    iconType="settings"
                  />
                </div>
                <Text type="text" size="small">
                  Heading
                </Text>
                <Text type="heading" size="large" style={{ fontWeight: 900 }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
                <Text type="text" size="small">
                  Icons
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: ".5rem",
                  }}>
                  <Icon type="pencil" />
                  <Icon type="code" />
                  <Icon type="settings" />
                  <Icon type="help" />
                  <Icon type="trash" />
                </div>
                <Text type="text" size="small">
                  Paragraph Text
                </Text>
                <Text type="text" size="large">
                  Nam faucibus accumsan ultrices. Duis magna velit, pretium quis
                  ultricies in, efficitur eu nisi. Ut id condimentum neque.
                  Integer dapibus eros urna, quis pharetra nunc fringilla eu.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
