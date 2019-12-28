import React, { useState, useCallback, useEffect } from "react";

import ChemicalClassButton from "./ChemicalClassButton";
import { sound2 } from "./Sounds";

const formula = (
  <div>
    H<sub>2</sub>SO<sub>4</sub>
  </div>
);

const Check = (props: {
  checkNumber: number;
  handleFinishEvent: () => void;
  mainAnimationDuration: number;
  clickAnimationDuration: number;
}): JSX.Element => {
  const [chosenClassName, setChosenClassName] = useState<string>(
    "startPosition"
  );

  const { checkNumber } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setChosenClassName("endPosition");
      console.log(' setChosenClassName("endPosition") ');
    }, 50);
    const timerFinish = setTimeout(() => {
      props.handleFinishEvent();
      console.log(" useEffect finish timeout ");
    }, props.mainAnimationDuration);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerFinish);
      console.log(" useEffect clearTimeouts ");
    };
  }, [props]);

  const handleClick = useCallback(
    str => {
      if (chosenClassName === "endPosition") {
        setChosenClassName(str);
        sound2.play();
        setTimeout(() => {
          sound2.pause(); // stop playing
          sound2.currentTime = 0;
          props.handleFinishEvent();
        }, props.clickAnimationDuration + 100);
      }
    },
    [chosenClassName, props]
  );

  return (
    <div className="main">
      <div className={"formula " + chosenClassName}>{formula}</div>
      <ChemicalClassButton
        name="Кислота"
        className={
          chosenClassName === "startPosition" && checkNumber === 1
            ? "endPosition"
            : "buttonPosition1"
        }
        handleClick={handleClick}
      />
      <ChemicalClassButton
        name="Соль"
        className={
          chosenClassName === "startPosition" && checkNumber === 1
            ? "endPosition"
            : "buttonPosition2"
        }
        handleClick={handleClick}
      />
      <ChemicalClassButton
        name="Основание"
        className={
          chosenClassName === "startPosition" && checkNumber === 1
            ? "endPosition"
            : "buttonPosition3"
        }
        handleClick={handleClick}
      />
      <ChemicalClassButton
        name="Оксид"
        className={
          chosenClassName === "startPosition" && checkNumber === 1
            ? "endPosition"
            : "buttonPosition4"
        }
        handleClick={handleClick}
      />
    </div>
  );
};

export default Check;
