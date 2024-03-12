import { h } from "preact";

interface IProps {
  children: any;
  className?: string;
  style?: any;
  type?: string;
  size?: string;
  inline?: boolean;
}

const Text = ({
  children,
  className,
  style,
  type = "text",
  size = "small",
  inline = false,
}: IProps) => {
  const buildClassName = `text-element ${className}`;

  const fontSizes: any = {
    text: {
      small: ".75rem",
      medium: "1rem",
      large: "1.25rem",
    },
    heading: {
      small: "1rem",
      medium: "1.25rem",
      large: "1.5rem",
    },
  };

  const defaultStyles = {
    fontSize: fontSizes[type][size],
    display: inline ? "inline" : "block",
    lineHeight: "150%",
  };

  return (
    <span className={buildClassName} style={{ ...defaultStyles, ...style }}>
      {children}
    </span>
  );
};

export default Text;
