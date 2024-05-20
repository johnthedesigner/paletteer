import { Link, render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import _ from "lodash";

import Button from "../components/Button";
import Text from "../components/Text";
import { colors } from "../../utils/tokens";

interface IProps {
  palettes: any;
  swatches: any;
  setCurrentView: Function;
}

const Tokens = ({ palettes, swatches, setCurrentView }: IProps) => {
  const editContainerStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "stretch",
  };

  const editSidebarStyles = {
    display: "flex",
    flexDirection: "column",
    width: "14rem",
    borderRight: "#EEE solid 1px" /* TODO: Replace with color token */,
  };

  const editSidebarHeaderStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    borderBottom: "#EEE solid 1px" /* TODO: Replace with color token */,
  };

  const codeSelectionButtons = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: ".5rem",
  };

  const editBodyStyles = {
    flex: 1,
    position: "relative",
  };

  const editBodyContainerStyles = {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
  };

  const editBodyHeaderStyles = {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    borderBottom: "#EEE solid 1px" /* TODO: Replace with color token */,
  };

  const codePreviewStyles = {
    flex: 1,
    padding: "1rem",
    alignSelf: "stretch",
    overflow: "scroll",
  };

  const codeStyles = {
    fontSize: "1rem",
    padding: "0",
  };

  const handleLineProps = (lineNumber: number) => {
    console.log(lineNumber, lineNumber % 2);
    return {
      style: {
        display: "flex",
        alignItems: "center",
        background: lineNumber % 2 === 0 ? "#F2F4FF" : "white",
        height: "1.5rem",
      },
    };
  };

  const lineNumberStyles = {
    color: "#95BDFD",
    marginRight: "1rem",
  };

  // Code Generation
  const [selectedLanguage, setSelectedLanguage] = useState("json");
  const selectedLanguageLabel = {
    json: "JSON",
    js: "Javascript",
    css: "CSS",
  } as any;
  const indent = "  ";
  const newLine = (string: string) => {
    return `${string}\n`;
  };

  const generateJsCode = () => {
    // Begin combined palettes object
    let jsCodeString = newLine("const palettes = {");
    _.each(palettes, async (palette: any, index: number) => {
      // Get swatches for this palette
      let paletteSwatches = _.filter(swatches, (swatch: any) => {
        return swatch.paletteId === palette.id;
      });
      // Begin individual palette object
      jsCodeString += newLine(`${indent}'${_.kebabCase(palette.name)}': {`);
      _.each(paletteSwatches, (swatch: any, index: number) => {
        jsCodeString += newLine(
          `${indent}${indent}${index}: "${swatch.variableColor}",`
        );
      });
      // End individual palette object
      jsCodeString += newLine(`${indent}},`);
    });
    // End combined palettes object
    jsCodeString += newLine(`},`);
    console.log(jsCodeString);
    return jsCodeString;
  };

  const generateCssCode = () => {
    // Begin combined palettes object
    let cssCodeString = newLine(`/* Paletteer Color Palettes */`);
    cssCodeString += newLine(":root {");
    _.each(palettes, async (palette: any, index: number) => {
      // Get swatches for this palette
      let paletteSwatches = _.filter(swatches, (swatch: any) => {
        return swatch.paletteId === palette.id;
      });
      // Begin individual palette object
      //   cssCodeString += newLine(`${indent}${_.kebabCase(palette.name)}: {`);
      _.each(paletteSwatches, (swatch: any, index: number) => {
        cssCodeString += newLine(
          `${indent}--${_.kebabCase(palette.name)}-${index}: ${
            swatch.variableColor
          };`
        );
      });
      cssCodeString += "\n";
      // End individual palette object
    });
    // End combined palettes object
    cssCodeString += newLine(`}`);
    console.log(cssCodeString);
    return cssCodeString;
  };

  const generateJsonCode = () => {
    // Begin combined palettes object
    let jsonCodeString = newLine(`{`);
    jsonCodeString += newLine(`${indent}"colors" = {`);
    _.each(palettes, async (palette: any, index: number) => {
      // Get swatches for this palette
      let paletteSwatches = _.filter(swatches, (swatch: any) => {
        return swatch.paletteId === palette.id;
      });
      // Begin individual palette object
      jsonCodeString += newLine(
        `${indent}${indent}"${_.kebabCase(palette.name)}": {`
      );
      _.each(paletteSwatches, (swatch: any, index: number) => {
        jsonCodeString += newLine(`${indent}${indent}${indent}"${index}": {`);
        jsonCodeString += newLine(
          `${indent}${indent}${indent}${indent}"value": "${swatch.variableColor}",`
        );
        jsonCodeString += newLine(
          `${indent}${indent}${indent}${indent}"type": "color",`
        );
        jsonCodeString += newLine(`${indent}${indent}${indent}},`);
      });
      // End individual palette object
      jsonCodeString += newLine(`${indent}${indent}},`);
    });
    // End combined palettes object
    jsonCodeString += newLine(`${indent}},`);
    jsonCodeString += newLine(`}`);
    console.log(jsonCodeString);
    return jsonCodeString;
  };

  var currentCodeString = "";
  if (selectedLanguage === "js") {
    currentCodeString = generateJsCode();
  } else if (selectedLanguage === "css") {
    currentCodeString = generateCssCode();
  } else {
    currentCodeString = generateJsonCode();
  }

  async function copyToClipboard(textToCopy: string) {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy);
    } else {
      // Use the 'out of viewport hidden text area' trick
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      // Move textarea out of the viewport so it's not visible
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";

      document.body.prepend(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }
  }

  return (
    <>
      <div style={editContainerStyles}>
        <div style={editSidebarStyles}>
          <div style={editSidebarHeaderStyles}>
            <Button
              buttonType="color"
              iconType="left-arrow"
              buttonColor={colors.purple[7]}
              text="Back to palettes"
              onClick={() => setCurrentView("seeds")}
            />
          </div>
          <div style={codeSelectionButtons}>
            <Button
              buttonType={selectedLanguage === "json" ? "secondary" : "text"}
              buttonColor={colors.purple[7]}
              text="JSON Tokens"
              onClick={() => setSelectedLanguage("json")}
            />
            <Button
              buttonType={selectedLanguage === "js" ? "secondary" : "text"}
              buttonColor={colors.purple[7]}
              text="Javascript Object"
              onClick={() => setSelectedLanguage("js")}
            />
            <Button
              buttonType={selectedLanguage === "css" ? "secondary" : "text"}
              buttonColor={colors.purple[7]}
              text="CSS Variables"
              onClick={() => setSelectedLanguage("css")}
            />
          </div>
        </div>
        <div style={editBodyStyles}>
          <div style={editBodyContainerStyles}>
            <div style={editBodyHeaderStyles}>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Text type="heading" size="small">
                  {selectedLanguageLabel[selectedLanguage]} Design Tokens
                </Text>
                <Link href="#">
                  <Text type="text" size="small">
                    About this format
                  </Text>
                </Link>
              </div>
              <div>
                <Button
                  buttonType="color"
                  iconType="clipboard"
                  buttonColor={colors.purple[7]}
                  text="Copy to Clipboard"
                  onClick={async () => {
                    try {
                      await copyToClipboard(currentCodeString);
                      // TODO: Trigger success toast
                      console.log("Text copied to the clipboard!");
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                />
              </div>
            </div>
            <div style={codePreviewStyles}>
              <SyntaxHighlighter
                language={selectedLanguage}
                style={githubGist}
                showLineNumbers={true}
                wrapLines={true}
                codeTagProps={{ style: codeStyles }}
                lineProps={handleLineProps}
                lineNumberStyle={lineNumberStyles}
                customStyle={{ overflow: "hidden", padding: 0, margin: 0 }}>
                {currentCodeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokens;
