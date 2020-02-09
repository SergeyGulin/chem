import React from "react";

import { ButtonClickedType } from "./ChemicalData";

export const Button = (props: {
  name: string;
  className: string;
  handleClick: () => void;
}): JSX.Element => (
  <div className={props.className + " scale1-1"}>
    <button className="buttonView" onClick={props.handleClick}>
      {props.name}
    </button>
  </div>
);

export const ClassificationButton = (props: {
  name: ButtonClickedType;
  className: string;
  handleClick: (str: ButtonClickedType) => void;
}): JSX.Element => (
  <Button
    name={props.name}
    className={props.className}
    handleClick={() => props.handleClick(props.name)}
  />
);
