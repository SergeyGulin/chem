import React, { useState, useCallback, useEffect } from "react";

import ChemicalClassButton from "./ChemicalClassButton";
import { sound } from "./Sounds";
import { ButtonClickedType, ChemicalType } from "./ChemicalData";

type StateType = "zero" | "zero+" | "zero+false" | ButtonClickedType;

const buttons = {
  Кислота: "buttonPosition1",
  Соль: "buttonPosition2",
  Основание: "buttonPosition3",
  Оксид: "buttonPosition4"
};

const Check = (props: {
  checkNumber: number;
  checksTotal: number;
  clickAnimationDuration: number;
  formula: ChemicalType;
  handleFinishEvent: (_: boolean | undefined) => void;
  mainAnimationDuration: number;
  score: number;
}): JSX.Element => {
  const [state, setState] = useState<StateType>("zero");
  const [showPrompt, setShowPrompt] = useState(false);

  const { checkNumber } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setState("zero+");
      console.log('setState("zero+"); ');
    }, 50);
    const timerFinish = setTimeout(() => {
      props.handleFinishEvent(undefined);
      console.log("useEffect finish timeout ");
    }, props.mainAnimationDuration);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerFinish);
      console.log("useEffect clearTimeouts ");
    };
  }, [props]);

  const handleClick = useCallback(
    (str: ButtonClickedType) => {
      if (state === "zero+") {
        setState(str);
        const result = props.formula.type === str;
        const soundNumber = result ? 1 : 2;
        sound(soundNumber);
        if (!result) {
          setTimeout(
            () => setState("zero+false"),
            props.clickAnimationDuration + 100
          );
        }
        setTimeout(() => {
          props.handleFinishEvent(result);
        }, (props.clickAnimationDuration + 100) * (result ? 1 : 2));
      }
    },
    [props, state]
  );

  let formulaPositionClass: string;
  let button1: string;
  let button2: string;
  let button3: string;
  let button4: string;
  let scoreClass: string;
  let checkNumberClass: string;

  switch (state) {
    case "zero":
      formulaPositionClass = "startPosition";
      if (checkNumber === 1) {
        button1 = "endPosition";
        button2 = "endPosition";
        button3 = "endPosition";
        button4 = "endPosition";
        scoreClass = "startPosition";
        checkNumberClass = "startPosition";
      } else {
        button1 = "buttonPosition1 transition-true";
        button2 = "buttonPosition2 transition-true";
        button3 = "buttonPosition3 transition-true";
        button4 = "buttonPosition4 transition-true";
        scoreClass = "score transition-true";
        checkNumberClass = "check-number transition-true";
      }
      break;
    case "zero+":
    case "zero+false":
      formulaPositionClass = "endPosition endPositionTransition";
      button1 = "buttonPosition1 transition-true";
      button2 = "buttonPosition2 transition-true";
      button3 = "buttonPosition3 transition-true";
      button4 = "buttonPosition4 transition-true";
      scoreClass = "score transition-true";
      checkNumberClass = "check-number transition-true";
      break;
    default:
      formulaPositionClass = `${buttons[state]} ${
        props.formula.type === state ? " transition-true" : " transition-false"
      }`;
      button1 = "buttonPosition1";
      button2 = "buttonPosition2";
      button3 = "buttonPosition3";
      button4 = "buttonPosition4";
      scoreClass = "score transition-true";
      checkNumberClass = "check-number transition-true";
      console.log("state =  ", state);
      console.log("formulaPositionClass =  ", formulaPositionClass);
      break;
  }

  return (
    <div className="main">
      <div className={scoreClass}>{props.score}</div>

      <div className={checkNumberClass}>
        {`${props.checkNumber} / ${props.checksTotal}`}
      </div>

      <ChemicalClassButton
        name="Кислота"
        className={button1}
        handleClick={handleClick}
      />
      <ChemicalClassButton
        name="Соль"
        className={button2}
        handleClick={handleClick}
      />
      <ChemicalClassButton
        name="Основание"
        className={button3}
        handleClick={handleClick}
      />
      <ChemicalClassButton
        name="Оксид"
        className={button4}
        handleClick={handleClick}
      />

      <div className={formulaPositionClass}>
        <button className="formulaView" onClick={() => setShowPrompt(true)}>
          {props.formula.formula}
        </button>
        {showPrompt && <div>{props.formula.text}</div>}
      </div>
    </div>
  );
};

export default Check;
