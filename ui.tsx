import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import generateColors from "./utils/generateColors.js";

type AppState = {
  seedColors: Array<string>;
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
            <p>
              Color:{" "}
              <input
                type="text"
                name={`color`}
                value={this.state.seedColors[i]}
                required
                onChange={e => this.onChange(e, i)}
              />
            </p>
          );
        })}
        <button id="addColor" onClick={this.addSeed}>
          Add Color
        </button>
        <button id="create" onClick={this.onCreate}>
          Create Palette
        </button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
