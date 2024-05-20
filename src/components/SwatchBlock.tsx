import { h, Fragment } from "preact";
import _ from "lodash";

import styles from "./SwatchBlock.module.css";

interface BlockProps {
  swatch: any;
}

const SwatchBlock = ({ swatch }: BlockProps) => {
  return (
    <>
      <div
        className={styles["swatch-block"]}
        style={{
          background: swatch.hex,
          color: swatch.displayColor,
        }}>
        <div className={styles["swatch-block__header"]}>
          <p className={styles["swatch-block__name"]}>
            {(swatch.index + 1).toFixed(0).padStart(2, "0")}
          </p>
          <p className={styles["swatch-block__black-contrast"]}>
            {swatch.contrastBlack.toFixed(2)}
            {swatch.displayColor === "black" && (
              <span style={{ marginLeft: ".25rem" }}>&bull;</span>
            )}
          </p>
          <p className={styles["swatch-block__white-contrast"]}>
            {swatch.contrastWhite.toFixed(2)}
            {swatch.displayColor === "white" && (
              <span style={{ marginLeft: ".25rem" }}>&bull;</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default SwatchBlock;
