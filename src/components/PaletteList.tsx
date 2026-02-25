import { h, Fragment } from "preact";
import _, { first } from "lodash";
import chroma from "chroma-js";

import PaletteBlock from "../components/PaletteBlock";
import { colors } from "../../utils/tokens";
import styles from "./PaletteList.module.css";
import Button from "./Button";

interface PalettesProps {
  palettes: any;
  swatches: any;
  pageColors: string[];
  addSeedColor: Function;
  editPalette: Function;
  removeSeedColor: Function;
}

const PaletteList = ({
  palettes,
  swatches,
  pageColors,
  addSeedColor,
  editPalette,
  removeSeedColor,
}: PalettesProps) => {
  const PaletteListSpacer = ({ height = "1rem", columnPalettes }: any) => {
    let spacerColor = colors.purple[1];
    if (
      columnPalettes.length > 0 &&
      columnPalettes[0] != undefined &&
      columnPalettes.temporaryHex === undefined
    ) {
      let firstColor = columnPalettes[0];
      let paletteSwatches = _.sortBy(
        _.filter(swatches, (swatch: any) => {
          return swatch.paletteId === firstColor.id;
        }),
        "index",
        "asc"
      );
      spacerColor = paletteSwatches[1]
        ? paletteSwatches[1].hex
        : colors.purple[0];
    }
    return (
      <div
        className={styles["palette-block-spacer"]}
        style={{ height, background: spacerColor }}
      />
    );
  };

  const pickWeightedRandomColor = () => {
    if (!pageColors || pageColors.length === 0) return;
    
    // Sort colors by distance from middle saturation (0.5)
    const targetSaturation = 0.5;
    const colorWeights = pageColors
      .map((color) => {
        try {
          const hsl = chroma(color).hsl();
          const saturation = isNaN(hsl[1]) ? 0 : hsl[1]; // Handle grayscale colors
          const distanceFromTarget = Math.abs(saturation - targetSaturation);
          // Weight inversely proportional to distance (closer = higher weight)
          const weight = 1 - distanceFromTarget;
          return { color, weight: Math.max(0.1, weight) }; // Minimum weight of 0.1
        } catch (e) {
          return { color, weight: 0.1 }; // Fallback for invalid colors
        }
      })
      .sort((a, b) => b.weight - a.weight); // Sort by weight descending
    
    // Create weighted array (colors with higher weights appear more frequently)
    const weightedColors: string[] = [];
    colorWeights.forEach(({ color, weight }) => {
      const frequency = Math.ceil(weight * 10); // Scale weights to reasonable frequency
      for (let i = 0; i < frequency; i++) {
        weightedColors.push(color);
      }
    });
    
    // Pick random color from weighted array
    const randomColor = weightedColors[Math.floor(Math.random() * weightedColors.length)];
    addSeedColor(randomColor);
  };

  const getColumns = () => {
    // Set up columns array
    let columns = [new Array(), new Array(), new Array()];
    // Loop through columns until they're done
    let columnLoop = (
      palettes: any,
      paletteIndex: number,
      columnIndex: number
    ) => {
      if (palettes.length === paletteIndex) {
        return;
      } else {
        columns[columnIndex].push(palettes[paletteIndex]);
        let newColumnIndex = columnIndex === 2 ? 0 : columnIndex + 1;
        columnLoop(palettes, paletteIndex + 1, newColumnIndex);
      }
    };
    columnLoop(palettes, 0, 0);
    return columns;
  };

  let paletteColumns = getColumns();

  return (
    <div className={styles["palette-list"]}>
      <div className={styles["palette-list__columns"]}>
        <PaletteListSpacer height="1rem" columnPalettes={paletteColumns[0]} />
        {_.map(paletteColumns[0], (palette: any) => {
          return (
            <PaletteBlock
              palette={palette}
              swatches={swatches}
              editPalette={editPalette}
              removeSeedColor={removeSeedColor}
            />
          );
        })}
        {paletteColumns[0].length < 1 && (
          <div
            className={styles["palette-block--placeholder"]}
            style={{ opacity: palettes.length < 1 ? 1 : 0 }}
          />
        )}
        {paletteColumns[0].length < 2 && (
          <div
            className={styles["palette-block--placeholder"]}
            style={{ opacity: palettes.length < 1 ? 1 : 0 }}
          />
        )}
      </div>
      <div className={styles["palette-list__columns"]}>
        <PaletteListSpacer height="3rem" columnPalettes={paletteColumns[1]} />
        {_.map(paletteColumns[1], (palette: any) => {
          return (
            <PaletteBlock
              palette={palette}
              swatches={swatches}
              editPalette={editPalette}
              removeSeedColor={removeSeedColor}
            />
          );
        })}
        {paletteColumns[1].length < 1 && (
          <div
            className={styles["palette-block--placeholder"]}
            style={{ opacity: palettes.length < 1 ? 1 : 0 }}>
            <p className={styles["palette-block__placeholder-text"]}>
              Pick a color to get started.
            </p>
            <Button
              text="Pick a random color"
              buttonType="secondary"
              iconType="palette"
              onClick={pickWeightedRandomColor}
            />
          </div>
        )}
        {paletteColumns[1].length < 2 && (
          <div
            className={styles["palette-block--placeholder"]}
            style={{ opacity: palettes.length < 1 ? 1 : 0 }}
          />
        )}
      </div>
      <div className={styles["palette-list__columns"]}>
        <PaletteListSpacer height="2rem" columnPalettes={paletteColumns[2]} />
        {_.map(paletteColumns[2], (palette: any) => {
          return (
            <PaletteBlock
              palette={palette}
              swatches={swatches}
              editPalette={editPalette}
              removeSeedColor={removeSeedColor}
            />
          );
        })}
        {paletteColumns[2].length < 1 && (
          <div
            className={styles["palette-block--placeholder"]}
            style={{ opacity: palettes.length < 1 ? 1 : 0 }}
          />
        )}
        {/* {paletteColumns[2].length < 2 && (
          <div className={styles["palette-block--placeholder"]} />
        )} */}
      </div>
    </div>
  );
};

export default PaletteList;
