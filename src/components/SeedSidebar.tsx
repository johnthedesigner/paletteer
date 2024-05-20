import { h, Fragment } from "preact";
import _ from "lodash";

import SeedButton from "./SeedButton";
import layoutStyles from "../styles/layout.module.css";
import styles from "./SeedSidebar.module.css";
import chroma from "chroma-js";

interface SidebarProps {
  selectionColors: any;
  pageColors: any;
  swatches: any;
  addSeedColor: Function;
}

const SeedSidebar = ({
  selectionColors,
  pageColors,
  swatches,
  addSeedColor,
}: SidebarProps) => {
  let orderedSelectionColors = _.orderBy(
    selectionColors,
    (color: any) => {
      return chroma(color).hsl()[0];
    },
    "desc"
  );
  let orderedPageColors = _.orderBy(
    _.xor(pageColors, selectionColors),
    (color: any) => {
      return chroma(color).hsl()[0];
    },
    "desc"
  );
  let extraPageColors = ["#FE5D47", "#EBC850", "#08E3D6", "#3785FB", "#E1BFFF"];
  return (
    <>
      <p className={layoutStyles["sidebar-title"]}>
        Choose brand colors to build your color palette.
      </p>
      {orderedSelectionColors.length > 0 && (
        <>
          <span className={styles["seed-list__label"]}>
            From your selection
          </span>
          <div className={styles["seed-list"]}>
            {_.map(orderedSelectionColors, (color: any) => {
              return (
                <SeedButton
                  color={color}
                  swatches={swatches}
                  addSeedColor={addSeedColor}
                />
              );
            })}
          </div>
        </>
      )}
      {orderedPageColors.length > 0 && (
        <>
          <span className={styles["seed-list__label"]}>From this file</span>
          <div className={styles["seed-list"]}>
            {_.map(orderedPageColors, (color: any) => {
              return (
                <SeedButton
                  color={color}
                  swatches={swatches}
                  addSeedColor={addSeedColor}
                />
              );
            })}
          </div>
        </>
      )}
      {orderedPageColors.length + orderedSelectionColors.length === 0 && (
        <>
          <span className={styles["seed-list__label"]}>Example colors</span>
          <div className={styles["seed-list"]}>
            {_.map(extraPageColors, (color: any) => {
              return (
                <SeedButton
                  color={color}
                  swatches={swatches}
                  addSeedColor={addSeedColor}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default SeedSidebar;
