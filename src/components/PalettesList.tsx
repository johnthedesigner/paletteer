import { h, Fragment } from "preact";
import _ from "lodash";
import chroma from "chroma-js";

import Button from "./Button";

interface IProps {
  palettes: any;
  removeSeedColor: Function;
  editPalette: Function;
}

const PalettesList = ({ palettes, removeSeedColor, editPalette }: IProps) => {
  const paletteListWrapperStyles = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflowX: "auto",
  };
  const PalettesListStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
  };

  const headerStyles = {
    display: "flex",
    flexDirection: "row",
    padding: ".75rem",
  };

  const titleAreaStyles = (seedDisplayColor: string) => {
    return {
      flex: 1,
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: ".125rem",
      color: seedDisplayColor,
    };
  };

  const actionAreaStyles = {
    display: "flex",
    flexDirection: "row",
    gap: ".5rem",
    alignItems: "center",
  };

  const ColorBlockStyles = (palette: any) => {
    return {
      width: "100%",
      background: palette.swatches[palette.sourceColorIndex].hex,
      borderRadius: ".375rem",
      overflow: "hidden",
    };
  };

  const gradientStyles = {
    display: "flex",
    flexDirection: "row",
  };

  const swatchStyles = (swatch: any) => {
    return {
      flex: 1,
      backgroundColor: swatch.variableColor,
      color: swatch.displayColor === "black" ? "black" : "white",
    };
  };

  return (
    <div className="palette-list-wrapper" style={paletteListWrapperStyles}>
      <div className="palette-list" style={PalettesListStyles}>
        {_.map(palettes, (palette: any, index: number) => {
          // Make sure swatches are ordered light-to-dark
          let paletteSwatches = _.orderBy(palette.swatches, (swatch: any) => {
            return 0 + swatch.contrastWhite;
          });
          let seedDisplayColor =
            palette.swatches[palette.sourceColorIndex].displayColor;
          return (
            <div
              className="color-block"
              style={ColorBlockStyles(palette)}
              onClick={() => editPalette(index)}>
              <div className="color-block__header" style={headerStyles}>
                <div
                  className="color-block__title-area"
                  style={titleAreaStyles(seedDisplayColor)}>
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      fontFamily: "Fira Mono",
                    }}>
                    {palette.name}
                  </span>
                  <span style={{ fontSize: ".75rem" }}>
                    Primary Shade:
                    <span
                      style={{
                        fontFamily: "Fira Mono",
                        textTransform: "uppercase",
                        marginLeft: ".25rem",
                      }}>
                      {palette.swatches[palette.sourceColorIndex].hex}
                    </span>
                  </span>
                </div>
                <div
                  className="color-block__header-actions"
                  style={actionAreaStyles}>
                  <Button
                    buttonType="primary"
                    lightDark={seedDisplayColor === "white" ? "light" : "dark"}
                    iconType="pencil"
                    text="Edit"
                    onClick={null}
                  />
                  <Button
                    buttonType="secondary"
                    lightDark={seedDisplayColor === "white" ? "light" : "dark"}
                    iconType="trash"
                    text="Delete"
                    onClick={() => {
                      removeSeedColor(
                        palette.swatches[palette.sourceColorIndex].hex
                      );
                    }}
                  />
                </div>
              </div>
              <div className="color-block__gradient" style={gradientStyles}>
                {_.map(paletteSwatches, (swatch: any, index: number) => {
                  return (
                    <div
                      className="color-block__swatch"
                      style={swatchStyles(swatch)}>
                      <p
                        style={{
                          color:
                            swatch.displayColor === "white" ? "white" : "black",
                          textAlign: "center",
                          fontFamily: "Fira Mono",
                        }}>
                        {(index + 1).toFixed(0).padStart(2, "0")}
                      </p>
                      <p style={{ color: "limegreen" }}>
                        {/* {Mark swatches that differ from generated color} */}
                        {swatch.hex != swatch.variableColor && <>XX</>}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PalettesList;
