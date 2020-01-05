import React from "react";

import { ButtonClickedType } from "./ChemicalData";

const ChemicalClassButton = (props: {
  name: ButtonClickedType;
  className: string;
  handleClick: (str: ButtonClickedType) => void;
}): JSX.Element => (
  <div className={props.className + " scale1-1"}>
    <button
      className="buttonView"
      onClick={() => props.handleClick(props.name)}
    >
      {props.name}
    </button>
  </div>
);

export default ChemicalClassButton;
