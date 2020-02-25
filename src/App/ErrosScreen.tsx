import React from 'react';
import { formulaRender } from './ChemicalData';
import { SvgCloseIcon } from './SvgCloseIcon';
type errorRecordType = {
    gradeClass: string;
    formula: string;
    name: string;
    answer: string;
    type: string;
    dateValue: string;
};

type PropsType = {
    handleCloseClick: () => void;
};

const ErrosScreen = (props: PropsType) => {
    const errors: { [gradeClass: string]: errorRecordType[] } = {};
    Object.entries(localStorage).forEach(([key, value]) => {
        const params = key.split('|');
        if (params.length === 6 && params[0] === 'error') {
            const [errorMark, gradeClass, formula, name, type, answer] = params;
            if (errorMark === 'error') {
                const gradeErrors: any = errors[gradeClass] || [];
                const valueArr = value.split('|');
                const dateValue = valueArr.length === 2 ? valueArr[1] : 'no date';
                const newGradeErrors: errorRecordType[] = [
                    ...gradeErrors,
                    { gradeClass, formula, name, type, answer, dateValue },
                ];
                errors[gradeClass] = newGradeErrors;
            }
        }
    });

    Object.values(errors).forEach(arr => {
        arr.sort((a, b) => (a.dateValue > b.dateValue ? -1 : 1));
    });

    // console.log('errors = ', errors);

    return (
        <div className="main3-background-size">
            <div className="close-icon" onClick={props.handleCloseClick}>
                <SvgCloseIcon color="black" size="2rem" />
            </div>
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
                                {gradeErrors.map(({ gradeClass, formula, name, type, answer }) => (
                                    <tr key={formula}>
                                        <td className="error-formula">{formulaRender(formula)}</td>
                                        <td className="error-name">{name}</td>
                                        <td className="error-formula text-decoration-line">
                                            {answer && answer !== 'undefined'
                                                ? answer
                                                : 'Нет ответа'}
                                        </td>
                                        <td className="error-name">{type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ErrosScreen;
