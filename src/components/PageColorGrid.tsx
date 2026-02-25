import { h } from "preact";
import styles from "./PageColorGrid.module.css";
import _ from "lodash";

interface PageColorGridProps {
  pageColors: any[];
  swatches: any;
  addSeedColor: Function;
}

const PageColorGrid = ({ pageColors, swatches, addSeedColor }: PageColorGridProps) => {
  // Check if colors exist in current palette to prevent duplication
  let existingColors = _.map(swatches, (swatch: any) => {
    return swatch.hex.toLowerCase();
  });

  const handleColorClick = (color: string) => {
    const colorInPalette = _.includes(existingColors, color.toLowerCase());
    if (!colorInPalette) {
      addSeedColor(color);
    }
  };

  return (
    <div className={styles["page-color-grid"]}>
      {_.map(pageColors, (color: string, index: number) => {
        const colorInPalette = _.includes(existingColors, color.toLowerCase());
        
        return (
          <button
            key={`page-color-${index}`}
            className={`${styles["page-color-swatch"]} ${
              colorInPalette ? styles["page-color-swatch--disabled"] : ""
            }`}
            style={{
              backgroundColor: color,
              cursor: colorInPalette ? "default" : "pointer",
            }}
            onClick={() => handleColorClick(color)}
            title={color}
          >
          </button>
        );
      })}
    </div>
  );
};

export default PageColorGrid;