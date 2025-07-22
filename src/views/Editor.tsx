import { h, Fragment } from "preact";
import _ from "lodash";

import layoutStyles from "../styles/layout.module.css";
import Button from "../components/Button";
import ColorEditor from "../components/ColorEditor";
import SwatchList from "../components/SwatchList";

interface EditorProps {
  selectedPaletteId: string;
  palettes: any;
  swatches: any;
  setCurrentView: Function;
  updatePaletteColor: Function;
  updatePaletteName: Function;
}

const Editor = ({
  selectedPaletteId,
  palettes,
  swatches,
  setCurrentView,
  updatePaletteColor,
  updatePaletteName,
}: EditorProps) => {
  let selectedPalette = _.find(palettes, (palette: any) => {
    return palette.id === selectedPaletteId;
  });
  let paletteSwatches = _.filter(swatches, (swatch: any) => {
    return swatch.paletteId === selectedPaletteId;
  });
  return (
    <>
      <div className={layoutStyles["body-wrapper"]}>
        <div className={layoutStyles["sidebar"]}>
          <div className={layoutStyles["sidebar__card"]}>
            <Button
              buttonType="color"
              iconType="left-arrow"
              text="Back to saved palettes"
              onClick={() => {
                console.log("back to saved palettes");
                setCurrentView("seeds");
              }}
            />
            <p className={layoutStyles["sidebar-title"]}>
              Let's get this color just right.
            </p>
            <ColorEditor
              palette={selectedPalette}
              swatches={swatches}
              updatePaletteColor={updatePaletteColor}
              updatePaletteName={updatePaletteName}
            />
          </div>
        </div>
        <div className={layoutStyles["main-body"]}>
          <SwatchList swatches={paletteSwatches} />
        </div>
      </div>
    </>
  );
};

export default Editor;
