import * as React from "react";
import { CustomPicker } from "react-color";
var {
  EditableInput,
  Hue,
  Saturation
} = require("react-color/lib/components/common");

import closeButton from "./closeButton";

type ComponentState = {
  color: string;
  displayColorPicker: boolean;
};

type ComponentProps = {
  color: string;
  handleChange: any;
};

const CustomPointer = () => {
  return <span className="color-picker__custom-pointer" />;
};

class ColorDrop extends React.Component<ComponentProps, ComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: props.color
    };
  }

  closePicker = () => {
    this.setState({
      displayColorPicker: false
    });
  };

  showPicker = () => {
    this.setState({
      displayColorPicker: true
    });
  };

  render() {
    let { color, handleChange } = this.props;

    return (
      <div>
        <span
          className="color-drop"
          style={{ backgroundColor: color }}
          onClick={this.showPicker}
        />
        {this.state.displayColorPicker ? (
          <div>
            <div className="color-picker__overlay" onClick={this.closePicker} />
            <div className="color-picker">
              <span className="color-picker__title">Adjust your color</span>
              <button
                className="color-picker__close-button"
                onClick={this.closePicker}
                dangerouslySetInnerHTML={{ __html: closeButton }}
                title="Close picker"
              ></button>
              <div className="color-picker__saturation-control">
                <Saturation {...this.props} onChange={handleChange} />
              </div>
              <div className="color-picker__hue-control">
                <Hue
                  {...this.props}
                  onChange={handleChange}
                  pointer={CustomPointer}
                />
              </div>
              <div className="color-picker__input-control">
                <EditableInput
                  value={color}
                  onChange={handleChange}
                  style={{
                    input: {
                      height: "1.5rem",
                      width: "11.35rem",
                      fontSize: ".75rem"
                    }
                  }}
                />
              </div>
              <div
                className="color-picker__preview-drop"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CustomPicker(ColorDrop);
