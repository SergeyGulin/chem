import React from "react";

export const GRADE_CLASS_ARRAY = [8, 9, 10];

export type scoreType = {
  date: number;
  score: number;
};
export const getKey = (gradeClass: number) => `${gradeClass} класс`;
export const getBestResults = (key: string): scoreType[] =>
  JSON.parse(localStorage.getItem(key) || "[]");

export const BestResultsScreen = (): JSX.Element => {
  const records = getBestResults(getKey(GRADE_CLASS_ARRAY[0]));
  return (
    <div className="main main1-background-size">
      <div>BestResultsScreen</div>
      {records.map((record: scoreType) => (
        <div className="display-flex" key={record.date}>
          <div className="record-score">{record.score}</div>
          <div className="record-date">
            {new Date(record.date).toLocaleDateString()}{" "}
            {new Date(record.date).toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
};
