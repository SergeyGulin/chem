import React from "react";

export type ButtonClickedType = "Кислота" | "Соль" | "Основание" | "Оксид";

export type ChemicalType = {
  name: string;
  type: ButtonClickedType;
  formula: JSX.Element;
  text: string;
};

export function reshuffle<T>(arr: T[]): T[] {
  const arr1 = arr.map((item: T): [number, T] => [Math.random(), item]);
  arr1.sort((a, b) => a[0] - b[0]);
  return arr1.map(pair => pair[1]);
}

export const formulas: { [key: string]: ChemicalType[] } = {
  "8_класс": [
    {
      name: "азотная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          HNO<sub>3</sub>
        </div>
      )
    },
    {
      name: "азотистая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          НNO<sub>2</sub>
        </div>
      )
    },
    {
      name: "фтороводородная (плавиковая ) кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>HF</div>
    },
    {
      name: "борная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          Н<sub>3</sub>ВО<sub>3</sub>
        </div>
      )
    },
    {
      name: "хлороводородная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>HCl</div>
    },
    {
      name: "уксусная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          СН<sub>3</sub>СООН
        </div>
      )
    },
    {
      name: "бромоводородная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>HBr</div>
    },
    {
      name: "муравьиная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>НСООН</div>
    },
    {
      name: "иодоводородная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>HI</div>
    },
    {
      name: "синильная кислота кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>НСN</div>
    },
    {
      name: "серная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SO<sub>4</sub>
        </div>
      )
    },
    {
      name: "дихромовая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          Н<sub>2</sub>Сr<sub>2</sub>O<sub>7</sub>
        </div>
      )
    },
    {
      name: "сернистая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SO<sub>3</sub>
        </div>
      )
    },
    {
      name: "хлорноватистая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: <div>НСlO</div>
    },
    {
      name: "сероводородная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>S
        </div>
      )
    },
    {
      name: "хлорноватая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          HClO<sub>3</sub>
        </div>
      )
    },
    {
      name: "мышьяковая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>3</sub>AsO<sub>4</sub>
        </div>
      )
    },
    {
      name: "угольная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>CO<sub>3</sub>
        </div>
      )
    },
    {
      name: "селеновая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SO<sub>4</sub>
        </div>
      )
    },
    {
      name: "кремниевая кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SiO<sub>3</sub>
        </div>
      )
    },
    {
      name: "селеноводородная кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>Sе
        </div>
      )
    },
    {
      name: "фосфорная (ортофосфорная) кислота",
      text: "нет подсказки",
      type: "Кислота",
      formula: (
        <div>
          H<sub>3</sub>PO<sub>4</sub>
        </div>
      )
    },

    /*
     **********************************************************************/

    {
      name: "Гидроксид аммония",
      text: "Сульфид аммония",
      type: "Основание",
      formula: (
        <div>
          NH<sub>4</sub>OH
        </div>
      )
    },
    {
      name: "Cульфит натрия",
      text: "Cульфит натрия",
      type: "Соль",
      formula: (
        <div>
          Na<sub>2</sub>SO<sub>3</sub>
        </div>
      )
    },
    {
      name: "Вода (оксид водорода)",
      text: "Вода",
      type: "Оксид",
      formula: (
        <div>
          H<sub>2</sub>O
        </div>
      )
    }
  ],
  "9_класс": [
    {
      name: "Cульфит натрия",
      text: "Cульфит натрия",
      type: "Соль",
      formula: (
        <div>
          Na<sub>2</sub>SO<sub>3</sub>
        </div>
      )
    }
  ],
  "10_класс": [
    {
      name: "Вода (оксид водорода)",
      text: "Вода",
      type: "Оксид",
      formula: (
        <div>
          H<sub>2</sub>O
        </div>
      )
    }
  ]
};

export const GRADE_CLASS_ARRAY = Object.keys(formulas);
