import React, { useState, useCallback, useEffect } from "react";

import { Button } from "./Button";
import Step from "./Step";

import { formulas, reshuffle } from "./ChemicalData";

import { sound } from "./Sounds";

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_TOTAL = 5;

const App: React.FC = () => {
  const [{ stepNumber, score }, setStepData] = useState<{
    stepNumber: number;
    score: number;
  }>({ stepNumber: 0, score: 0 });
  const [resufledFormulas, setResufledFormulas] = useState(formulas);

  const [animationStep, setAnimationStep] = useState(false);

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
    const timer = setTimeout(() => setAnimationStep(true), 50);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleStartClick = useCallback(() => {
    console.log("Нажата кнопка старт");
    const newResufledFormulas = reshuffle(formulas);
    setResufledFormulas(newResufledFormulas);
    console.log("newResufledFormulas = ", newResufledFormulas);
    setStepData({ stepNumber: 1, score: 0 });
    sound(0);
  }, []);

  const handleFinishEvent = useCallback(
    ({
      name,
      type,
      answer
    }: {
      name: string;
      type: string;
      answer: string | undefined;
    }) => {
      console.log("handleFinishEvent name = ", name);
      console.log("handleFinishEvent type = ", type);
      console.log("handleFinishEvent answer = ", answer);
      let newScore;
      if (answer === undefined) {
        newScore = score;
      } else {
        if (type === answer) {
          newScore = score + 2;
        } else {
          newScore = score - 1;
        }
      }

      setStepData({
        stepNumber:
          stepNumber > CHECKS_TOTAL || stepNumber >= resufledFormulas.length
            ? 0
            : stepNumber + 1,
        score: newScore
      });
    },
    [stepNumber, resufledFormulas.length, score]
  );

  return (
    <div>
      {stepNumber === 0 ? (
        <div key="Старт" className="main main1-background-size">
          <Button
            name="Начать новую игру"
            className={
              animationStep
                ? "startPosition transition-true"
                : "buttonPositionPlay"
            }
            handleClick={handleStartClick}
          />
          <Button
            name="Лучшие результаты"
            className={
              animationStep
                ? "startPosition transition-true"
                : "buttonPositionShowRecords"
            }
            handleClick={handleStartClick}
          />
          <Button
            name="Неправильные ответы"
            className={
              animationStep
                ? "startPosition transition-true"
                : "buttonPositionShowWrongShots"
            }
            handleClick={handleStartClick}
          />
        </div>
      ) : (
        <Step
          key={stepNumber}
          stepNumber={stepNumber}
          checksTotal={CHECKS_TOTAL}
          clickAnimationDuration={CLICK_ANIMATION_DURATION}
          formula={resufledFormulas[stepNumber - 1]}
          handleFinishEvent={handleFinishEvent}
          mainAnimationDuration={MAIN_ANIMATION_DURATION}
          score={score}
        />
      )}
    </div>
  );
};

export default App;
