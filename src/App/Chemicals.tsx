import React from "react";

export type ButtonClickedType = "Кислота" | "Соль" | "Основание" | "Оксид";

export type ChemicalType = {
  name: string;
  type: ButtonClickedType;
  formula: JSX.Element;
  text?: string;
};

export function reshuffle<T>(arr: T[]): T[] {
  const arr1 = arr.map((item: T): [number, T] => [Math.random(), item]);
  arr1.sort((a, b) => a[0] - b[0]);
  return arr1.map(pair => pair[1]);
}

export const formulas: ChemicalType[] = [
  {
    name: "Серная кислота",
    type: "Кислота",
    formula: (
      <div>
        H<sub>2</sub>SO<sub>4</sub>
      </div>
    )
  },
  {
    name: "Соляная кислота",
    type: "Кислота",
    formula: <div>HCl</div>
  },
  {
    name: "Гидроксид аммония",
    type: "Основание",
    formula: (
      <div>
        NH<sub>4</sub>OH
      </div>
    )
  },
  {
    name: "Cульфит натрия",
    type: "Соль",
    formula: (
      <div>
        Na<sub>2</sub>SO<sub>3</sub>
      </div>
    )
  },
  {
    name: "Вода (оксид водорода)",
    type: "Оксид",
    formula: (
      <div>
        H<sub>2</sub>O
      </div>
    )
  }
];
