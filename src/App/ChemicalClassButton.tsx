import React from "react";

const ChemicalClassButton = (props: {
  name: string;
  className: string;
  handleClick: (str: string) => void;
}): JSX.Element => (
  <div className={props.className + " scale"}>
    <button
      className="button"
      onClick={() => props.handleClick(props.className)}
    >
      {props.name}
    </button>
  </div>
);

export default ChemicalClassButton;
