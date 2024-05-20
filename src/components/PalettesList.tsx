import { h, Fragment } from "preact";
import _ from "lodash";
import chroma from "chroma-js";

import Button from "./Button";

interface IProps {
  palettes: any;
  swatches: any;
  removeSeedColor: Function;
  editPalette: Function;
}

const PalettesList = ({
  palettes,
  swatches,
  removeSeedColor,
  editPalette,
}: IProps) => {
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

  const ColorBlockStyles = (seedColor: string) => {
    return {
      width: "100%",
      background: seedColor,
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
          let paletteSwatches = _.filter(swatches, (swatch: any) => {
            return swatch.paletteId === palette.id;
          });
          paletteSwatches = _.orderBy(paletteSwatches, (swatch: any) => {
            return 0 + swatch.contrastWhite;
          });
          let seedSwatch = _.find(swatches, (swatch: any) => {
            return swatch.id === palette.sourceColorId;
          });
          let seedDisplayColor = seedSwatch.displayColor;
          let seedColor = seedSwatch.variableColor;

          return (
            <div
              className="color-block"
              style={ColorBlockStyles(seedSwatch.variableColor)}
              onClick={() => editPalette(palette.id)}>
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
                      {seedColor}
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
                    onClick={(e: any) => {
                      e.stopPropagation();
                      removeSeedColor(palette.id);
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
