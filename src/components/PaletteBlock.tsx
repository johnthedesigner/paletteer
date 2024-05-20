import { h, Fragment } from "preact";
import _ from "lodash";
import chroma from "chroma-js";
import { useState } from "react";

import getPaletteSwatches from "../../utils/getPaletteSwatches";
import styles from "./PaletteBlock.module.css";
import Icon from "./Icon";

interface BlockProps {
  palette: any;
  swatches: any;
  editPalette: Function;
  removeSeedColor: Function;
}

const PaletteBlock = ({
  palette,
  swatches,
  editPalette,
  removeSeedColor,
}: BlockProps) => {
  const [deleteHovered, setDeleteHovered] = useState(false);

  // CHECK IF THIS IS A TEMPORARY PALETTE OR IF IT HAS SWATCHES
  if (palette.temporaryHex) {
    // THIS IS A PLACEHOLDER PALETTE, SHOW LOADING PLACEHOLDER
    return (
      <>
        <div
          className={styles["palette-block"]}
          style={{
            background: palette.temporaryHex,
            color: chroma(palette.temporaryHex).brighten(2).hex(),
          }}>
          <p className={styles["palette-block__name"]}>Loading...</p>
        </div>
      </>
    );
  } else {
    // THIS IS A FULLY CREATED PALETTE WITH SWATCHES
    // Get the source swatch for this palette
    let sourceSwatch = _.find(swatches, (swatch: any) => {
      return palette.sourceColorId === swatch.id;
    });
    // Get all of the matching swatches for this palette ordered by index
    let paletteSwatches = getPaletteSwatches(palette, swatches);
    // Get the darker and lighter halves of the palette sorted by
    // the color distance from the source swatch
    let darkColors = _.sortBy(
      _.slice(paletteSwatches, 8, 16),
      (swatch: any) => {
        return chroma.contrast(sourceSwatch.hex, swatch.hex);
      },
      "asc"
    );
    let lightColors = _.sortBy(
      _.slice(paletteSwatches, 0, 8),
      (swatch: any) => {
        return chroma.contrast(sourceSwatch.hex, swatch.hex);
      },
      "asc"
    );
    // Choose as prospective text colors the opposite side from the source color
    let prospectiveTextColors =
      sourceSwatch.index < 7 ? darkColors : lightColors;
    prospectiveTextColors = _.orderBy(prospectiveTextColors, (swatch: any) => {
      return chroma.distance(sourceSwatch.hex, swatch.hex);
    });
    // Choose as prospective button colors the same side ast the source color
    let prospectiveButtonColors =
      sourceSwatch.index < 7 ? lightColors : darkColors;
    prospectiveButtonColors = _.orderBy(
      prospectiveButtonColors,
      (swatch: any) => {
        return chroma.distance(sourceSwatch.hex, swatch.hex);
      }
    );
    // Choose the first color that meets our minimum contrast requirement
    let textContrast = 4.5;
    let buttonContrast = 1;
    let textColor =
      _.find(prospectiveTextColors, (swatch: any) => {
        return chroma.contrast(sourceSwatch.hex, swatch.hex) > textContrast;
      }) || _.last(prospectiveTextColors);
    let buttonColor =
      _.find(prospectiveButtonColors, (swatch: any) => {
        return chroma.contrast(sourceSwatch.hex, swatch.hex) > buttonContrast;
      }) || _.last(prospectiveButtonColors);

    return (
      <>
        <div
          className={styles["palette-block"]}
          style={{
            background: sourceSwatch.hex,
            color: textColor?.hex || "red",
          }}
          onClick={() => editPalette(palette.id)}>
          {paletteSwatches?.length === 0 && (
            <p className={styles["palette-block__name"]}>Loading...</p>
          )}
          {paletteSwatches?.length > 0 && (
            <>
              <div className={styles["palette-block__header"]}>
                <p className={styles["palette-block__name"]}>{palette.name}</p>
                <p className={styles["palette-block__hex"]}>
                  {sourceSwatch.hex}
                </p>
              </div>
              <div className={styles["palette-block__footer"]}>
                <button
                  onMouseOver={() => setDeleteHovered(true)}
                  onMouseOut={() => setDeleteHovered(false)}
                  style={{
                    color: textColor.hex,
                    background: deleteHovered ? buttonColor.hex : "transparent",
                  }}
                  className={styles["palette-block__button"]}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    removeSeedColor(palette.id);
                  }}>
                  <Icon type={"trash"} iconColor={textColor.hex} />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
};

export default PaletteBlock;
