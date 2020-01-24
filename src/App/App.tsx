import React, { useState, useCallback, useEffect } from "react";

import { Button } from "./Button";
import Step from "./Step";

import { formulas, reshuffle } from "./ChemicalData";

import { sound } from "./Sounds";
import { BestResultsScreen, getBestResults, getKey } from "./BestResultsScreen";
import ErrosScreen from "./ErrosScreen";

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_TOTAL = 5;
const RECORDS_TOTAL = 5;

const START_SCREEN_STATE = 0;
const FINISH_SCREEN_STATE = -1;
const BEST_RESULTS_SCREEN_STATE = -2;
const ERRORS_SCREEN_STATE = -3;

const App: React.FC = () => {
  const [{ stepNumber, score, gradeClass }, setStepData] = useState<{
    stepNumber: number;
    score: number;
    gradeClass: number;
  }>({ stepNumber: FINISH_SCREEN_STATE, score: 5, gradeClass: 8 });
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
    setStepData({ stepNumber: 1, score: 0, gradeClass });
    sound(0);
  }, [gradeClass]);

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
      const keyStep = `${name}/${answer}`;
      const count = parseInt(localStorage.getItem(keyStep) || "0", 10);

      let newScore;
      if (answer === undefined) {
        newScore = score;
        localStorage.setItem(keyStep, `${count + 1}`);
      } else {
        if (type === answer) {
          newScore = score + 2;
        } else {
          newScore = score - 1;
          localStorage.setItem(keyStep, `${count + 1}`);
        }
      }

      const thisWasTheLastStep =
        stepNumber > CHECKS_TOTAL || stepNumber >= resufledFormulas.length;

      setStepData({
        stepNumber: thisWasTheLastStep ? FINISH_SCREEN_STATE : stepNumber + 1,
        score: newScore,
        gradeClass
      });
      if (thisWasTheLastStep) {
        const key = getKey(gradeClass);
        let records = getBestResults(key);
        records.push({
          date: Date.now(),
          score: newScore
        });
        records.sort((a, b) => b.score - a.score);
        records = records.slice(0, RECORDS_TOTAL);
        localStorage.setItem(key, JSON.stringify(records));
      }
    },
    [stepNumber, resufledFormulas.length, gradeClass, score]
  );

  switch (stepNumber) {
    case START_SCREEN_STATE:
      return (
        <div className="main main1-background-size">
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
              setStepData({
                stepNumber: BEST_RESULTS_SCREEN_STATE,
                score: 0,
                gradeClass
              })
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
              setStepData({
                stepNumber: ERRORS_SCREEN_STATE,
                score: 0,
                gradeClass
              })
            }
          />
        </div>
      );

    case FINISH_SCREEN_STATE:
      return (
        <div className="main main1-background-size">
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
              setStepData({
                stepNumber: START_SCREEN_STATE,
                score: 0,
                gradeClass
              })
            }
          />
        </div>
      );

    case BEST_RESULTS_SCREEN_STATE: {
      const key = getKey(gradeClass);
      const records = getBestResults(key);
      return (
        <div
          onClick={() =>
            setStepData({
              stepNumber: START_SCREEN_STATE,
              score: 0,
              gradeClass
            })
          }
        >
          <BestResultsScreen />
        </div>
      );
    }

    case ERRORS_SCREEN_STATE:
      return (
        <div
          onClick={() =>
            setStepData({
              stepNumber: START_SCREEN_STATE,
              score: 0,
              gradeClass
            })
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
          handleStopEvent={() =>
            setStepData({
              stepNumber: START_SCREEN_STATE,
              score: 0,
              gradeClass
            })
          }
          mainAnimationDuration={MAIN_ANIMATION_DURATION}
          score={score}
        />
      );
  }
};

export default App;
