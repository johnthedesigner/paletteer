import { render } from "@create-figma-plugin/ui";
import { h, Fragment } from "preact";

import layoutStyles from "../styles/layout.module.css";
import styles from "./Palette.module.css";
import SeedSidebar from "../components/SeedSidebar";
import PaletteList from "../components/PaletteList";
import Button from "../components/Button";
import Settings from "../components/Settings";
import { colors } from "../../utils/tokens";
import Logo from "../components/logo";

// Show EMERGENCY RESET button for development and testing
const showResetButton = true;

interface PaletteProps {
  palettes: any;
  swatches: any;
  selectionColors: any;
  pageColors: any;
  pageColorsLoading: boolean;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  numberOfShades: number;
  onShadesChange: (shades: number) => void;
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
  pageColorsLoading,
  isSettingsOpen,
  setIsSettingsOpen,
  numberOfShades,
  onShadesChange,
  editPalette,
  addSeedColor,
  removeSeedColor,
  resetData,
  setCurrentView,
}: PaletteProps) => {
  return (
    <>
      <div className={layoutStyles["body-wrapper"]} style={{ filter: isSettingsOpen ? "blur(2px)" : "none" }}>
        <div className={layoutStyles["sidebar"]}>
          <div className={layoutStyles["sidebar__card"]}>
            {/* <Logo /> */}
            <SeedSidebar
              selectionColors={selectionColors}
              pageColors={pageColors}
              pageColorsLoading={pageColorsLoading}
              swatches={swatches}
              addSeedColor={addSeedColor}
            />
          </div>
        </div>
        <div className={layoutStyles["main-body"]}>
          <PaletteList
            palettes={palettes}
            swatches={swatches}
            pageColors={pageColors}
            addSeedColor={addSeedColor}
            editPalette={editPalette}
            removeSeedColor={removeSeedColor}
          />
          <div className={styles["action-overlay"]}>
            {showResetButton && (
              <>
                <Button
                  text="Settings"
                  buttonType="outline"
                  iconType="settings"
                  onClick={() => setIsSettingsOpen(true)}
                />
                <Button
                  text="Get tokens"
                  buttonType="primary"
                  disabled={palettes.length === 0}
                  iconType="code"
                  onClick={() => setCurrentView("tokens")}
                />
              </>
            )}
          </div>
        </div>
      </div>
      
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        numberOfShades={numberOfShades}
        onShadesChange={onShadesChange}
        onReset={resetData}
      />
    </>
  );
};

export default Palette;
