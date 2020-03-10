import React, { useState, useCallback, useEffect, useReducer } from 'react';
import { Button } from './Button';
import Step from './Step';

import { getButtonNames, formulas, reshuffle, GRADE_CLASS_ARRAY } from './ChemicalData';

import { sound, soundsType, setMuteModeForSounds } from './Sounds';
import { BestResultsScreen, getBestResults } from './BestResultsScreen';

import ErrosScreen from './ErrosScreen';
import { SvgSpeakerIcon } from './SvgSpeakerIcon';

// import { convert } from "./util";
// convert();

const MAIN_ANIMATION_DURATION = 10000;
const CLICK_ANIMATION_DURATION = 1000;

const CHECKS_TOTAL = 20;
const RECORDS_TOTAL = 5;

const START_SCREEN_STATE = 0;
const FINISH_SCREEN_STATE = -1;
const BEST_RESULTS_SCREEN_STATE = -2;
const ERRORS_SCREEN_STATE = -3;

const MUTE_ALL_SOUNDS = 'MUTE_ALL_SOUNDS';

const App: React.FC = () => {
    const [forceUpdateState, forceUpdate] = useState(false);
    const [{ stepNumber, score, gradeClass }, setStepData] = useState<{
        stepNumber: number;
        score: number;
        gradeClass: string;
    }>({
        stepNumber: START_SCREEN_STATE,
        score: 0,
        gradeClass: GRADE_CLASS_ARRAY[0],
    });
    const [{ resufledFormulas, buttonNames }, setResufledFormulas] = useState({
        resufledFormulas: formulas[gradeClass],
        buttonNames: getButtonNames(gradeClass),
    });

    const [animationStep, setAnimationStep] = useState(false);

    useEffect(() => {
        const element = document.documentElement;
        element.style.setProperty(
            '--main-animation-duration',
            (MAIN_ANIMATION_DURATION / 1000).toFixed(2) + 's',
        );
        element.style.setProperty(
            '--click-animation-duration',
            (CLICK_ANIMATION_DURATION / 1000).toFixed(2) + 's',
        );
        const timer = setTimeout(() => setAnimationStep(true), 50);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleStartClick = useCallback((grade: string) => {
        // console.log("Нажата кнопка старт");
        const resufledFormulas = reshuffle(formulas[grade]);
        const buttonNames = getButtonNames(grade);
        setResufledFormulas({ resufledFormulas, buttonNames });
        // console.log("resufledFormulas = ", resufledFormulas);
        setStepData({
            stepNumber: 1,
            score: 0,
            gradeClass: grade,
        });
        sound(soundsType.START);
    }, []);

    const handleCloseClick = useCallback(
        () =>
            setStepData({
                stepNumber: START_SCREEN_STATE,
                score: 0,
                gradeClass,
            }),
        [gradeClass],
    );
    const handleFinishEvent = useCallback(
        ({
            name,
            type,
            answer,
            formula,
        }: {
            name: string;
            type: string;
            answer: string | undefined;
            formula: string;
        }) => {
            console.log('handleFinishEvent name = ', name);
            console.log('handleFinishEvent type = ', type);
            console.log('handleFinishEvent answer = ', answer);

            const errorKey = `error|${gradeClass}|${formula}|${name}|${type}|${answer}`;
            const localArr = (localStorage.getItem(errorKey) || `0|0`).split('|');
            const count = parseInt(localArr[0], 10);
            let newScore;
            if (answer === undefined) {
                newScore = score;
                localStorage.setItem(errorKey, `${count + 1}|${Date.now()}`);
            } else {
                if (type === answer) {
                    newScore = score + 2;
                    if (count > 0) {
                        localStorage.setItem(errorKey, `${count - 1}|${Date.now()}`);
                    } else {
                        localStorage.removeItem(errorKey);
                    }
                } else {
                    newScore = score - 1;
                    localStorage.setItem(errorKey, `${count + 1}|${Date.now()}`);
                }
            }

            const thisWasTheLastStep =
                stepNumber >= CHECKS_TOTAL || stepNumber >= resufledFormulas.length;

            setStepData({
                stepNumber: thisWasTheLastStep ? FINISH_SCREEN_STATE : stepNumber + 1,
                score: newScore,
                gradeClass,
            });
            if (thisWasTheLastStep) {
                let records = getBestResults(gradeClass);
                records.push({
                    date: Date.now(),
                    score: newScore,
                });
                records.sort((a, b) => b.score - a.score);
                records = records.slice(0, RECORDS_TOTAL);
                localStorage.setItem(gradeClass, JSON.stringify(records));
            }
        },
        [stepNumber, resufledFormulas.length, gradeClass, score],
    );

    const toggleMuteMode = useCallback(() => {
        let muteMode = localStorage.getItem(MUTE_ALL_SOUNDS) || '';
        if (muteMode === '') {
            muteMode = 'yes';
        } else {
            muteMode = '';
        }
        setMuteModeForSounds(muteMode);
        localStorage.setItem(MUTE_ALL_SOUNDS, muteMode);
        forceUpdate(forceUpdateState === false);
    }, [forceUpdateState]);

    switch (stepNumber) {
        case START_SCREEN_STATE:
            const muteMode = localStorage.getItem('MUTE_ALL_SOUNDS') || '';
            setMuteModeForSounds(muteMode);

            return (
                <div className="main main1-background-size">
                    <div
                        className={`speaker-icon ${muteMode ? 'speaker-icon-mute' : ''}`}
                        onClick={toggleMuteMode}
                    >
                        <SvgSpeakerIcon color={'black'} size="2rem" />
                    </div>
                    {GRADE_CLASS_ARRAY.map((grade, index) => (
                        <Button
                            key={grade}
                            name={`Начать игру "${grade}"`}
                            className={
                                animationStep
                                    ? `buttonPositionPlay${index + 1} transition-true`
                                    : 'startPosition'
                            }
                            handleClick={() => handleStartClick(grade)}
                        />
                    ))}

                    <Button
                        name="Лучшие результаты"
                        className={
                            animationStep
                                ? 'buttonPositionShowRecords transition-true'
                                : 'startPosition'
                        }
                        handleClick={() => {
                            setStepData({
                                stepNumber: BEST_RESULTS_SCREEN_STATE,
                                score: 0,
                                gradeClass,
                            });
                            sound(soundsType.BEST_RESULTS);
                        }}
                    />
                    <Button
                        name="Неправильные ответы"
                        className={
                            animationStep
                                ? 'buttonPositionShowWrongShots transition-true'
                                : 'startPosition'
                        }
                        handleClick={() => {
                            setStepData({
                                stepNumber: ERRORS_SCREEN_STATE,
                                score: 0,
                                gradeClass,
                            });
                            sound(soundsType.ERROR_RESULTS);
                        }}
                    />
                </div>
            );

        case FINISH_SCREEN_STATE:
            return (
                <div className="main main1-background-size">
                    <div
                        className={
                            animationStep
                                ? 'buttonPositionPlay result transition-true'
                                : 'startPosition result'
                        }
                    >{`Итого: ${score}`}</div>

                    <Button
                        name={`Возврат на главный экран`}
                        className={
                            animationStep
                                ? 'buttonPositionShowRecords  transition-true'
                                : 'startPosition'
                        }
                        handleClick={() =>
                            setStepData({
                                stepNumber: START_SCREEN_STATE,
                                score: 0,
                                gradeClass,
                            })
                        }
                    />
                </div>
            );

        case BEST_RESULTS_SCREEN_STATE: {
            return <BestResultsScreen handleCloseClick={handleCloseClick} />;
        }

        case ERRORS_SCREEN_STATE:
            return <ErrosScreen handleCloseClick={handleCloseClick} />;

        default:
            return (
                <Step
                    key={stepNumber}
                    buttonNames={buttonNames}
                    stepNumber={stepNumber}
                    checksTotal={CHECKS_TOTAL}
                    clickAnimationDuration={CLICK_ANIMATION_DURATION}
                    formula={resufledFormulas[stepNumber - 1]}
                    handleFinishEvent={handleFinishEvent}
                    handleStopEvent={() => {
                        setStepData({
                            stepNumber: START_SCREEN_STATE,
                            score: 0,
                            gradeClass,
                        });
                        sound(soundsType.ERROR_RESULTS);
                    }}
                    mainAnimationDuration={MAIN_ANIMATION_DURATION}
                    score={score}
                />
            );
    }
};

export default App;
