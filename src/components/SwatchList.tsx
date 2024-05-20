import { h } from "preact";
import _ from "lodash";

import styles from "./SwatchList.module.css";
import SwatchBlock from "./SwatchBlock";

interface SwatchesProps {
  swatches: any;
}

const SwatchList = ({ swatches }: SwatchesProps) => {
  const SwatchListSpacer = ({ height = "1rem", columnSwatches }: any) => {
    let spacerColor = columnSwatches[0].hex;
    return (
      <div
        className={styles["swatch-block-spacer"]}
        style={{ height, background: spacerColor }}
      />
    );
  };

  const getColumns = () => {
    // Set up columns array
    let columns = [new Array(), new Array(), new Array(), new Array()];
    // Loop through columns until they're done
    let columnLoop = (
      swatches: any,
      swatchIndex: number,
      columnIndex: number
    ) => {
      if (swatches.length === swatchIndex) {
        return;
      } else {
        columns[columnIndex].push(swatches[swatchIndex]);
        let newColumnIndex = columnIndex === 3 ? 0 : columnIndex + 1;
        columnLoop(swatches, swatchIndex + 1, newColumnIndex);
      }
    };
    columnLoop(swatches, 0, 0);
    return columns;
  };

  let swatchColumns = getColumns();

  return (
    <div className={styles["swatch-list"]}>
      <div className={styles["swatch-list__columns"]}>
        <SwatchListSpacer height="2rem" columnSwatches={swatchColumns[0]} />
        {_.map(swatchColumns[0], (swatch: any) => {
          return <SwatchBlock swatch={swatch} />;
        })}
        {swatchColumns[0].length < 1 && (
          <div className={styles["swatch-block--placeholder"]} />
        )}
      </div>
      <div className={styles["swatch-list__columns"]}>
        <SwatchListSpacer height="1rem" columnSwatches={swatchColumns[1]} />
        {_.map(swatchColumns[1], (swatch: any) => {
          return <SwatchBlock swatch={swatch} />;
        })}
        {swatchColumns[1].length < 1 && (
          <div className={styles["swatch-block--placeholder"]} />
        )}
      </div>
      <div className={styles["swatch-list__columns"]}>
        <SwatchListSpacer height="4rem" columnSwatches={swatchColumns[2]} />
        {_.map(swatchColumns[2], (swatch: any) => {
          return <SwatchBlock swatch={swatch} />;
        })}
        {swatchColumns[2].length < 1 && (
          <div className={styles["swatch-block--placeholder"]} />
        )}
      </div>
      <div className={styles["swatch-list__columns"]}>
        <SwatchListSpacer height="3rem" columnSwatches={swatchColumns[3]} />
        {_.map(swatchColumns[3], (swatch: any) => {
          return <SwatchBlock swatch={swatch} />;
        })}
        {swatchColumns[3].length < 1 && (
          <div className={styles["swatch-block--placeholder"]} />
        )}
      </div>
    </div>
  );
};

export default SwatchList;
