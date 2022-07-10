import * as React from "react";
import chroma from "chroma-js";
import _ from "lodash";

import "../styles/ui.css";
import generateColors from "../../../utils/generateColors.js";
import paletteLogo from "./paletteLogo";
import closeButton from "./closeButton";
import ColorDrop from "./ColorDrop";

type AppState = {
  seedColors: Array<string>;
  palettes: any;
  swatchCount: number;
};

const initialSeedColor = "4FE8BA";

const SwatchItem = ({ color }) => {
  return <span className="swatch-item" style={{ backgroundColor: color }} />;
};

const ToggleCount = ({ value, active, onClick }) => {
  let className = active
    ? "count-selector__toggle-button active"
    : "count-selector__toggle-button";
  return (
    <span className={className} tabIndex={0} onClick={onClick}>
      {value}
    </span>
  );
};

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      seedColors: [],
      palettes: [generateColors(initialSeedColor, 12)],
      swatchCount: 12,
      pluginData: {},
    };

    window.onmessage = this.receiveMessage;
  }

  receiveMessage = (event: any) => {
    if (event.data.pluginMessage.type === "page-colors") {
      // Get colors from message object and build an array of hex values
      console.log(event.data.pluginMessage.pageColors);
      let colorArray = _.uniq(
        _.map(event.data.pluginMessage.pageColors, (color) => {
          return chroma(color.r * 255, color.g * 255, color.b * 255).hex();
        })
      );
      if (colorArray.length === 0) colorArray = [initialSeedColor];
      this.setState({
        seedColors: colorArray,
        palettes: _.map(colorArray, (seedColor) => {
          return generateColors(seedColor, this.state.swatchCount);
        }),
      });
    } else if ((event.data.pluginMessage.type = "get-plugin-data")) {
    }
  };

  addSeed = () => {
    let newSeedColors = [...this.state.seedColors, initialSeedColor];
    this.setState({
      seedColors: newSeedColors,
      palettes: _.map(newSeedColors, (seedColor) => {
        return generateColors(seedColor, this.state.swatchCount);
      }),
    });
  };

  removeSeed = (i) => {
    let newSeedColors = [...this.state.seedColors];
    newSeedColors.splice(i, 1);
    this.setState({
      seedColors: newSeedColors,
      palettes: _.map(newSeedColors, (seedColor) => {
        return generateColors(seedColor, this.state.swatchCount);
      }),
    });
  };

  changeSwatchCount = (count) => {
    this.setState({
      swatchCount: count,
      palettes: _.map(this.state.seedColors, (seedColor) => {
        return generateColors(seedColor, count);
      }),
    });
  };

  handlePickerChange = (color, colorIndex) => {
    console.log(chroma(color).hex());
    let newSeedColors = [...this.state.seedColors];
    newSeedColors[colorIndex] = chroma(color).hex();
    this.setState({
      seedColors: newSeedColors,
      palettes: _.map(newSeedColors, (seedColor) => {
        return generateColors(seedColor, this.state.swatchCount);
      }),
    });
  };

  onChange = (e, i) => {
    let newSeedColors = [...this.state.seedColors];
    let renderedSeedColors = [...this.state.seedColors];
    newSeedColors[i] = e.target.value;
    if (chroma.valid(e.target.value)) {
      renderedSeedColors[i] = e.target.value;
    } else {
      renderedSeedColors[i] = "FFFFFF";
    }
    this.setState({
      seedColors: newSeedColors,
      palettes: _.map(renderedSeedColors, (seedColor) => {
        return generateColors(seedColor, this.state.swatchCount);
      }),
    });
  };

  onCreate = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-palette",
          palettes: this.state.palettes,
        },
      },
      "*"
    );
  };

  onPluginData = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "get-plugin-data",
        },
      },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  render() {
    return (
      <div>
        <div id="logo" dangerouslySetInnerHTML={{ __html: paletteLogo }} />

        <div className="count-selector">
          <div className="count-selector__label">Swatches per hue:</div>
          <div className="count-selector__toggle">
            <ToggleCount
              value={6}
              active={this.state.swatchCount === 6}
              onClick={() => this.changeSwatchCount(6)}
            />
            <ToggleCount
              value={12}
              active={this.state.swatchCount === 12}
              onClick={() => this.changeSwatchCount(12)}
            />
            <ToggleCount
              value={18}
              active={this.state.swatchCount === 18}
              onClick={() => this.changeSwatchCount(18)}
            />
          </div>
        </div>

        <div className="colors-list">
          {_.map(this.state.seedColors, (seedColor, i) => {
            let currentPalette = this.state.palettes[i];
            return (
              <div className="colors-row" key={i}>
                <span className="colors-row__color-drop">
                  <ColorDrop
                    color={
                      currentPalette.swatches[currentPalette.sourceColorIndex]
                        .hex
                    }
                    handleChange={(color) => {
                      this.handlePickerChange(color, i);
                    }}
                  />
                </span>

                <span className="colors-row__color-input">
                  <input
                    type="text"
                    name={`color`}
                    value={seedColor}
                    required
                    onClick={(e) => e.currentTarget.select()}
                    onChange={(e) => this.onChange(e, i)}
                  />
                </span>

                <span className="colors-row__swatch-preview">
                  {_.map(currentPalette.swatches, (seedColor, i) => {
                    return <SwatchItem color={seedColor.hex} key={i} />;
                  })}
                </span>

                <span
                  className={`colors-row__remove-color ${this.state.seedColors
                    .length > 1 || "disabled"}`}>
                  <button
                    className="remove-color-button"
                    onClick={() => this.removeSeed(i)}
                    dangerouslySetInnerHTML={{ __html: closeButton }}
                    title="Remove color"
                  />
                </span>
              </div>
            );
          })}
        </div>

        <div className="list-footer">
          <button className="add-color-button" onClick={this.addSeed}>
            + Add Color
          </button>
        </div>

        <div className="action-buttons">
          <button className="button_secondary" onClick={this.onCancel}>
            Cancel
          </button>
          <button className="button_primary" onClick={this.onCreate}>
            Generate Palette
          </button>
          <button className="button_primary" onClick={this.onPluginData}>
            Get Plugin Data
          </button>
        </div>
      </div>
    );
  }
}

export default App;
