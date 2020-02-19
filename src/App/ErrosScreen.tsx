import React from "react";
import { formulaRender } from "./ChemicalData";
type errorRecordType = {
  gradeClass: string;
  formula: string;
  name: string;
  answer: string;
  type: string;
};

const ErrosScreen: React.FC = () => {
  const errors: { [gradeClass: string]: errorRecordType[] } = {};
  Object.entries(localStorage).forEach(([key, value]) => {
    const params = key.split("/");
    if (params.length === 6 && params[0] === "error") {
      const [errorMark, gradeClass, formula, name, type, answer] = params;
      if (errorMark === "error") {
        const gradeErrors: any = errors[gradeClass] || [];
        const newGradeErrors: errorRecordType[] = [
          ...gradeErrors,
          { gradeClass, formula, name, type, answer }
        ];
        errors[gradeClass] = newGradeErrors;
      }
    }
  });
  console.log("errors = ", errors);

  return (
    <div className="main3-background-size">
      <div className="font-size-1-5">Ошибки:</div>
      <div className="overflow-scroll">
        {Object.entries(errors).map(([grade, gradeErrors]) => (
          <div key={grade} className="font-size-1-5">
            <div>{grade}</div>
            <table>
              <thead>
                <tr>
                  <th className="error-header">Формула</th>
                  <th className="error-header">Имя</th>
                  <th className="error-header">Ответ</th>
                  <th className="error-header">Правильный ответ</th>
                </tr>
              </thead>

              <tbody>
                {gradeErrors.map(
                  ({ gradeClass, formula, name, type, answer }) => (
                    <tr>
                      <td className="error-formula">
                        {formulaRender(formula)}
                      </td>
                      <td className="error-name">{name}</td>
                      <td className="error-formula text-decoration-line">
                        {answer && answer !== "undefined"
                          ? answer
                          : "Нет ответа"}
                      </td>
                      <td className="error-name">{type}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ErrosScreen;
