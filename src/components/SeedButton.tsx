import { h } from "preact";
import styles from "./SeedButton.module.css";
import Icon from "./Icon";
import { colors } from "../../utils/tokens";
import chroma from "chroma-js";
import _ from "lodash";

interface ButtonProps {
  color: string;
  swatches: any;
  addSeedColor: Function;
}
const SeedButton = ({ color, swatches, addSeedColor }: ButtonProps) => {
  // Check if this color exists in the current palette, so we can prevent duplication
  let existingColors = _.map(swatches, (swatch: any) => {
    return swatch.hex.toLowerCase();
  });
  let colorInPalette = _.includes(existingColors, color.toLowerCase());
  let displayColor = chroma.contrast(color, "white") >= 4.5 ? "white" : "black";
  const handleClick = (e: any) => {
    if (!colorInPalette || true) {
      // TODO: remove this override
      addSeedColor(color);
    }
  };
  return (
    <button
      className={styles["seed-button"]}
      style={{
        background: color,
        cursor: colorInPalette ? "default" : "pointer",
      }}
      onClick={handleClick}>
      <span className={styles["seed-button__content"]}>
        <span
          className={styles["seed-button__hex"]}
          style={{
            color: displayColor,
            cursor: colorInPalette ? "default" : "pointer",
          }}>
          {color}
        </span>
        {!colorInPalette && (
          <span
            className={styles["seed-button__icon"]}
            style={{
              cursor: colorInPalette ? "default" : "pointer",
            }}>
            <Icon type="right-arrow" iconColor={displayColor} />
          </span>
        )}
        {colorInPalette && (
          <span
            className={styles["seed-button__icon"]}
            style={{
              cursor: colorInPalette ? "default" : "pointer",
            }}>
            <Icon type="check" iconColor={displayColor} />
          </span>
        )}
      </span>
    </button>
  );
};

export default SeedButton;
