import React from "react";
import ReactDOM from "react-dom";

import generateColors from "./utils/generateColors.js";

class App extends React.Component {
  textbox: HTMLInputElement;

  colorRef = (element: HTMLInputElement) => {
    if (element) element.value = "#F00";
    this.textbox = element;
  };

  onCreate = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-palette",
          palette: generateColors(this.textbox.value)
        }
      },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  render() {
    console.log("render the plugin");
    // console.log(this.textbox.value);
    // console.log("generate colors: ", generateColors("cyan"));

    return (
      <div>
        <h2>Palette Creator</h2>
        <p>
          Color: <input type="text" ref={this.colorRef} />
        </p>
        <button id="create" onClick={this.onCreate}>
          Create Palette
        </button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
