import { h, Fragment } from "preact";
import _, { first } from "lodash";

import PaletteBlock from "../components/PaletteBlock";
import { colors } from "../../utils/tokens";
import styles from "./PaletteList.module.css";
import Button from "./Button";

interface PalettesProps {
  palettes: any;
  swatches: any;
  editPalette: Function;
  removeSeedColor: Function;
}

const PaletteList = ({
  palettes,
  swatches,
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
              buttonColor={colors.purple[7]}
              iconType="palette"
              onClick={() => console.log("test")}
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
