import * as React from "react";
import _ from "lodash";

import "../styles/ui.css";
import generateColors from "../../../utils/generateColors.js";

// declare function require(path: string): any;

type AppState = {
  seedColors: string[];
};

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      seedColors: ["red", "blue"]
    };
  }

  addSeed = () => {
    let newSeedColors = [...this.state.seedColors];
    newSeedColors[this.state.seedColors.length] = "";
    this.setState({ seedColors: newSeedColors });
  };

  buildGradients = () => {
    return _.map(this.state.seedColors, seedColor => {
      return generateColors(seedColor);
    });
  };

  onChange = (e, i) => {
    let newSeedColors = [...this.state.seedColors];
    newSeedColors[i] = e.target.value;
    this.setState({ seedColors: newSeedColors });
  };

  onCreate = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-palette",
          palettes: this.buildGradients()
        }
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
        <h2>Palette Creator</h2>
        {_.map(this.state.seedColors, (seedColor, i) => {
          return (
            <p key={i}>
              Color:{" "}
              <input
                type="text"
                name={`color`}
                value={seedColor}
                required
                onChange={e => this.onChange(e, i)}
              />
            </p>
          );
        })}
        <button id="addColor" onClick={this.addSeed}>
          Add Color
        </button>
        <hr />
        <button id="create" onClick={this.onCreate}>
          Create Palette
        </button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}

export default App;
