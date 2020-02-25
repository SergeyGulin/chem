import React from 'react';

import { GRADE_CLASS_ARRAY } from './ChemicalData';
import { SvgGoBackIcon } from './SvgGoBackIcon';

export type scoreType = {
    date: number;
    score: number;
};
export const getBestResults = (key: string): scoreType[] =>
    JSON.parse(localStorage.getItem(key) || '[]');

type PropsType = {
    handleCloseClick: () => void;
};
export const BestResultsScreen = (props: PropsType): JSX.Element => {
    return (
        <div className="main main2-background-size">
            <div className="go-back-icon" onClick={props.handleCloseClick}>
                <SvgGoBackIcon color="black" size="2rem" />
            </div>
            <div className="display-flex-center">
                <div>
                    <div className="display-flex-center font-size-1-5">Лучшие результаты:</div>
                    {GRADE_CLASS_ARRAY.map((grade, index) => (
                        <div key={grade} className="font-size-1-5">
                            <div>{grade}</div>
                            {getBestResults(GRADE_CLASS_ARRAY[index]).map((record: scoreType) => (
                                <div className="display-flex" key={record.date}>
                                    <div className="record-score">{record.score}</div>
                                    <div className="record-date">
                                        {new Date(record.date).toLocaleDateString()}{' '}
                                        {new Date(record.date).toLocaleTimeString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
