import React, { useState, useCallback, useEffect } from "react";

import Check from "./Check";

import { formulas, reshuffle } from "./Chemicals";

import { sound1 } from "./Sounds";

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_TOTAL = 5;

const App: React.FC = () => {
  const [checkNumber, setCheckNumber] = useState(0);
  const [resufledFormulas, setResufledFormulas] = useState(formulas);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const element = document.documentElement;
    element.style.setProperty(
      "--main-animation-duration",
      (MAIN_ANIMATION_DURATION / 1000).toFixed(2) + "s"
    );
    element.style.setProperty(
      "--click-animation-duration",
      (CLICK_ANIMATION_DURATION / 1000).toFixed(2) + "s"
    );
    return () => {};
  }, []);

  const handleStartClick = useCallback(() => {
    console.log("Нажата кнопка старт");
    const newResufledFormulas = reshuffle(formulas);
    setResufledFormulas(newResufledFormulas);
    console.log("newResufledFormulas = ", newResufledFormulas);
    setCheckNumber(1);
    setScore(0);
    sound1.play();
  }, []);

  const handleFinishEvent = useCallback(
    result => {
      console.log("handleFinishEvent fired");
      let newScore = score;
      switch (result) {
        case true:
          newScore += 2;
          break;
        case false:
          newScore -= 1;
          break;
        case undefined:
          newScore += 0;
          break;
      }
      setScore(newScore);
      setCheckNumber(
        checkNumber > CHECKS_TOTAL || checkNumber >= resufledFormulas.length
          ? 0
          : checkNumber + 1
      );
    },
    [checkNumber, resufledFormulas.length, score]
  );

  return (
    <div>
      {checkNumber === 0 ? (
        <div key="Старт">
          <button onClick={handleStartClick}>Старт</button>
        </div>
      ) : (
        <Check
          key={checkNumber}
          checkNumber={checkNumber}
          checksTotal={CHECKS_TOTAL}
          clickAnimationDuration={CLICK_ANIMATION_DURATION}
          formula={resufledFormulas[checkNumber - 1]}
          handleFinishEvent={handleFinishEvent}
          mainAnimationDuration={MAIN_ANIMATION_DURATION}
          score={score}
        />
      )}
    </div>
  );
};

export default App;
