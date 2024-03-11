import { h } from "preact";

import Icon from "./Icon";
import { useState } from "react";

interface IProps {
  text: string;
  lightDark?: string;
  iconType?: string;
  buttonType?: string;
  onClick: any;
}

const iconTypes = {
  pencil: "pencil",
};

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
  text: "text",
  color: "color",
};

const buttonStates = {
  default: "default",
  active: "active",
  disabled: "disabled",
};

const Button = ({
  text = "Click Me",
  lightDark = "dark",
  iconType = iconTypes.pencil,
  buttonType = buttonTypes.primary,
  onClick,
}: IProps) => {
  return (
    <button
      className={`button button__${buttonType}--${lightDark}`}
      onClick={onClick}>
      {text}
      {iconType && <Icon type={iconType} className="button-icon" />}
    </button>
  );
};

export default Button;
