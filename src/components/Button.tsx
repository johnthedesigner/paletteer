import { h } from "preact";

import Icon from "./Icon";
import { useState } from "react";
import { colors } from "../../utils/tokens";

interface IProps {
  text: string;
  lightDark?: string;
  iconType?: string;
  buttonType?: string;
  onClick: any;
  disabled?: boolean;
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
  disabled = false,
}: IProps) => {
  return (
    <button
      className={`button button__${buttonType}--${lightDark}`}
      disabled={disabled}
      onClick={onClick}>
      {iconType && <Icon type={iconType} className="button-icon" />}
      {text}
    </button>
  );
};

export default Button;
