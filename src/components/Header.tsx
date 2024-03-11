import { h } from "preact";

import Button from "./Button";

interface IProps {
  fileName: string;
  palettes: any;
  resetData: any;
  updateConfig: any;
}

const headerStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  flexDirection: "row",
  padding: "0 1rem",
};

const titleBlockStyles = {
  flex: 1,
  alignSelf: "center",
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
};

const actionBlockStyles = {
  alignSelf: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: ".5rem",
};

const fileNameStyles = {
  fontSize: "1.25rem",
  fontWeight: "700",
};

const fileNameLabelStyles = {
  fontSize: ".75rem",
  color: "#999999" /* TODO: Replace with color token */,
  padding: "0 .5rem",
};

const Header = ({ fileName, palettes, resetData, updateConfig }: IProps) => {
  return (
    <div className="header" style={headerStyles}>
      <div className="header__title-block" style={titleBlockStyles}>
        <div>
          <span style={fileNameStyles}>{fileName}</span>
          <span style={fileNameLabelStyles}>
            <em>(Current file)</em>
          </span>
        </div>
        <div>
          <h3>
            <b>{palettes.length}</b> color palettes in this file
          </h3>
        </div>
      </div>
      <div className="header__action-block" style={actionBlockStyles}>
        <Button
          buttonType="text"
          iconType="help"
          onClick={null}
          text="How does this work"
        />
        <Button
          buttonType="secondary"
          iconType="settings"
          onClick={null}
          text="Settings"
        />
        <Button
          buttonType="primary"
          onClick={resetData}
          text="Emergency Reset"
        />
      </div>
    </div>
  );
};

export default Header;
