import React, { useState, useCallback, useEffect } from "react";

import { Button } from "./Button";
import Step from "./Step";

import { formulas, reshuffle } from "./ChemicalData";

import { sound } from "./Sounds";
import BestResultsScreen from "./BestResultsScreen";
import ErrosScreen from "./ErrosScreen";

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_TOTAL = 5;

const START_SCREEN_STATE = 0;
const FINISH_SCREEN_STATE = -1;
const BEST_RESULTS_SCREEN_STATE = -2;
const ERRORS_SCREEN_STATE = -3;

const App: React.FC = () => {
  const [{ stepNumber, score }, setStepData] = useState<{
    stepNumber: number;
    score: number;
  }>({ stepNumber: FINISH_SCREEN_STATE, score: 5 });
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
            ? FINISH_SCREEN_STATE
            : stepNumber + 1,
        score: newScore
      });
    },
    [stepNumber, resufledFormulas.length, score]
  );

  switch (stepNumber) {
    case START_SCREEN_STATE:
      return (
        <div key="Старт" className="main main1-background-size">
          <Button
            name={`Начать игру (8${"\u00A0"}класс)`}
            className={
              animationStep
                ? "buttonPositionPlay transition-true"
                : "startPosition"
            }
            handleClick={handleStartClick}
          />
          <Button
            name="Лучшие результаты"
            className={
              animationStep
                ? "buttonPositionShowRecords transition-true"
                : "startPosition"
            }
            handleClick={() =>
              setStepData({ stepNumber: BEST_RESULTS_SCREEN_STATE, score: 0 })
            }
          />
          <Button
            name="Неправильные ответы"
            className={
              animationStep
                ? "buttonPositionShowWrongShots transition-true"
                : "startPosition"
            }
            handleClick={() =>
              setStepData({ stepNumber: ERRORS_SCREEN_STATE, score: 0 })
            }
          />
        </div>
      );

    case FINISH_SCREEN_STATE:
      return (
        <div key="Старт" className="main main1-background-size">
          <div
            className={
              animationStep
                ? "buttonPositionPlay result transition-true"
                : "startPosition result"
            }
          >{`Итого: ${score}`}</div>

          <Button
            name={`Возврат на главный экран`}
            className={
              animationStep
                ? "buttonPositionShowRecords  transition-true"
                : "startPosition"
            }
            handleClick={() =>
              setStepData({ stepNumber: START_SCREEN_STATE, score: 0 })
            }
          />
        </div>
      );

    case BEST_RESULTS_SCREEN_STATE:
      return (
        <div
          onClick={() =>
            setStepData({ stepNumber: START_SCREEN_STATE, score: 0 })
          }
        >
          <BestResultsScreen />
        </div>
      );

    case ERRORS_SCREEN_STATE:
      return (
        <div
          onClick={() =>
            setStepData({ stepNumber: START_SCREEN_STATE, score: 0 })
          }
        >
          <ErrosScreen />
        </div>
      );

    default:
      return (
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
      );
  }
};

export default App;
