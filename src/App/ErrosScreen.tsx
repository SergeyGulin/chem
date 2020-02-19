import React from "react";
import { formulaRender } from "./ChemicalData";
type errorRecordType = {
  gradeClass: string;
  name: string;
  answer: string;
};

const ErrosScreen: React.FC = () => {
  const errors: { [gradeClass: string]: errorRecordType[] } = {};
  Object.entries(localStorage).forEach(([key, value]) => {
    const params = key.split("/");
    if (params.length === 4 && params[0] === "error") {
      const [errorMark, gradeClass, name, answer] = params;
      if (errorMark === "error") {
        const gradeErrors: any = errors[gradeClass] || [];
        const newGradeErrors: errorRecordType[] = [
          ...gradeErrors,
          { gradeClass, name, answer }
        ];
        errors[gradeClass] = newGradeErrors;
      }
    }
  });
  console.log("errors = ", errors);

  return (
    <div className="main main3-background-size">
      {formulaRender("SO3")}
      {formulaRender("CO2")}
      {formulaRender("N2O3")}
      {formulaRender("Cl2O7")}
      {formulaRender("aaaaaa")}
      <div className="display-flex-center">
        <div className="overflow-scroll">
          <div className="display-flex-center font-size-1-5">Ошибки:</div>
          {Object.entries(errors).map(([grade, gradeErrors]) => (
            <div key={grade} className="font-size-1-5">
              <div>{grade}</div>
              {gradeErrors.map(({ gradeClass, name, answer }) => (
                <div className="display-flex" key={name}>
                  <div className="record-score">{name}</div>
                  <div className="record-date">{answer}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ErrosScreen;
