import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";

import layoutStyles from "../styles/layout.module.css";
import styles from "./Palette.module.css";
import SeedSidebar from "../components/SeedSidebar";
import PaletteList from "../components/PaletteList";
import Button from "../components/Button";
import { colors } from "../../utils/tokens";
import Logo from "../components/logo";

// Show EMERGENCY RESET button for development and testing
const showResetButton = true;

interface PaletteProps {
  palettes: any;
  swatches: any;
  selectionColors: any;
  pageColors: any;
  editPalette: Function;
  addSeedColor: Function;
  removeSeedColor: Function;
  resetData: Function;
  setCurrentView: Function;
}
const Palette = ({
  palettes,
  swatches,
  selectionColors,
  pageColors,
  editPalette,
  addSeedColor,
  removeSeedColor,
  resetData,
  setCurrentView,
}: PaletteProps) => {
  return (
    <div className={layoutStyles["body-wrapper"]}>
      <div className={layoutStyles["sidebar"]}>
        <div className={layoutStyles["sidebar__card"]}>
          {/* <Logo /> */}
          <SeedSidebar
            selectionColors={selectionColors}
            pageColors={pageColors}
            swatches={swatches}
            addSeedColor={addSeedColor}
          />
        </div>
      </div>
      <div className={layoutStyles["main-body"]}>
        <PaletteList
          palettes={palettes}
          swatches={swatches}
          editPalette={editPalette}
          removeSeedColor={removeSeedColor}
        />
        <div className={styles["action-overlay"]}>
          {showResetButton && (
            <>
              <Button
                text="Reset"
                buttonType="color"
                buttonColor={colors.purple[7]}
                iconType="reset"
                onClick={() => resetData()}
              />
              <Button
                text="Get tokens"
                buttonType="color"
                buttonColor={colors.purple[7]}
                disabled={palettes.length === 0}
                iconType="code"
                onClick={() => setCurrentView("tokens")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Palette;
