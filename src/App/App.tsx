import React, { useState, useCallback, useEffect } from "react";

import Check from "./Check";

import { formulas } from "./Chemicals";

import { sound1 } from "./Sounds";

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_NUMBER = 5;

const App: React.FC = () => {
  const [checkNumber, setCheckNumber] = useState(0);

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
    setCheckNumber(1);
    sound1.play();
  }, []);

  const handleFinishEvent = useCallback(() => {
    console.log("handleFinishEvent fired");
    setCheckNumber(checkNumber > CHECKS_NUMBER ? 0 : checkNumber + 1);
  }, [checkNumber]);

  return (
    <div>
      {checkNumber === 0 ? (
        <div key="Старт">
          <button onClick={handleStartClick}>Старт</button>
        </div>
      ) : (
        <Check
          key={checkNumber}
          formula={formulas[checkNumber - 1]}
          checkNumber={checkNumber}
          handleFinishEvent={handleFinishEvent}
          mainAnimationDuration={MAIN_ANIMATION_DURATION}
          clickAnimationDuration={CLICK_ANIMATION_DURATION}
        />
      )}
    </div>
  );
};

export default App;
