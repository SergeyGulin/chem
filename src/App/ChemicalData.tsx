import React from "react";

export type ButtonClickedType =
  | "Кислота"
  | "Соль"
  | "Основание"
  | "Оксид";

export type ChemicalType = {
  name: string;
  type: ButtonClickedType;
  formula: JSX.Element;
  text: string;
};

export function reshuffle<T>(arr: T[]): T[] {
  const arr1 = arr.map((item: T): [number, T] => [
    Math.random(),
    item
  ]);
  arr1.sort((a, b) => a[0] - b[0]);
  return arr1.map(pair => pair[1]);
}

export const formulas: { [key: string]: ChemicalType[] } = {
  "Уровень 1": [
    {
      name: "азотная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          HNO<sub>3</sub>
        </div>
      )
    },
    {
      name: "азотистая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          НNO<sub>2</sub>
        </div>
      )
    },
    {
      name: "фтороводородная (плавиковая ) кислота",
      text: "",
      type: "Кислота",
      formula: <div>HF</div>
    },
    {
      name: "борная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          Н<sub>3</sub>ВО<sub>3</sub>
        </div>
      )
    },
    {
      name: "хлороводородная кислота",
      text: "",
      type: "Кислота",
      formula: <div>HCl</div>
    },
    {
      name: "уксусная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          СН<sub>3</sub>СООН
        </div>
      )
    },
    {
      name: "бромоводородная кислота",
      text: "",
      type: "Кислота",
      formula: <div>HBr</div>
    },
    {
      name: "муравьиная кислота",
      text: "",
      type: "Кислота",
      formula: <div>НСООН</div>
    },
    {
      name: "иодоводородная кислота",
      text: "",
      type: "Кислота",
      formula: <div>HI</div>
    },
    {
      name: "синильная кислота кислота",
      text: "",
      type: "Кислота",
      formula: <div>НСN</div>
    },
    {
      name: "серная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SO<sub>4</sub>
        </div>
      )
    },
    {
      name: "дихромовая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          Н<sub>2</sub>Сr<sub>2</sub>O<sub>7</sub>
        </div>
      )
    },
    {
      name: "сернистая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SO<sub>3</sub>
        </div>
      )
    },
    {
      name: "хлорноватистая кислота",
      text: "",
      type: "Кислота",
      formula: <div>НСlO</div>
    },
    {
      name: "сероводородная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>S
        </div>
      )
    },
    {
      name: "хлорноватая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          HClO<sub>3</sub>
        </div>
      )
    },
    {
      name: "мышьяковая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>3</sub>AsO<sub>4</sub>
        </div>
      )
    },
    {
      name: "угольная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>CO<sub>3</sub>
        </div>
      )
    },
    {
      name: "селеновая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SO<sub>4</sub>
        </div>
      )
    },
    {
      name: "кремниевая кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>SiO<sub>3</sub>
        </div>
      )
    },
    {
      name: "селеноводородная кислота",
      text: "",
      type: "Кислота",
      formula: (
        <div>
          H<sub>2</sub>Sе
        </div>
      )
    },
    {
      name: "фосфорная (ортофосфорная) кислота",
      text: "",
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
      name: "Гидроксид лития",
      text: "",
      type: "Основание",
      formula: <div>LiOH</div>
    },
    {
      name: "Гидроксид натрия",
      text: "",
      type: "Основание",
      formula: <div>NaOH</div>
    },
    {
      name: "Гидроксид калия",
      text: "",
      type: "Основание",
      formula: <div>KOH</div>
    },
    {
      name: "Гидроксид рубидия",
      text: "",
      type: "Основание",
      formula: <div>RbOH</div>
    },
    {
      name: "Гидроксид лития",
      text: "",
      type: "Основание",
      formula: <div>LiOH</div>
    },
    {
      name: "Гидроксид цезия",
      text: "",
      type: "Основание",
      formula: <div>CsOH</div>
    },
    {
      name: "Гидроксид меди(I)",
      text: "",
      type: "Основание",
      formula: <div>CuOH</div>
    },
    {
      name: "Гидроксид кальция",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Ca(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "Гидроксид меди(II)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Cu(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "Гидроксид железа(II)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Fe(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "Гидроксид бария",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Ba(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "Гидроксид кобальта(II)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Co(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "Гидроксид никеля (II)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Ni(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "Гидроксид свинца (II)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Pb(OH)<sub>2</sub>
        </div>
      )
    },
    /*
     **********************************************************************/
    {
      name: "гидроксид железа(III)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Fe(OH)<sub>3</sub>
        </div>
      )
    },
    {
      name: "гидроксид алюминия",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Al(OH)<sub>3</sub>
        </div>
      )
    },
    {
      name: "гидроксид цинка",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Zn(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "гидроксид бериллия",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Be(OH)<sub>2</sub>
        </div>
      )
    },
    {
      name: "гидроксид хрома(III)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Cr(OH)<sub>3</sub>
        </div>
      )
    },
    {
      name: "гидроксид марганца (IV)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Mn(OH)<sub>4</sub>
        </div>
      )
    },
    {
      name: "гидроксид cвинца (IV)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Pb(OH)<sub>4</sub>
        </div>
      )
    },
    {
      name: "гидроксид марганца (II)",
      text: "",
      type: "Основание",
      formula: (
        <div>
          Mn(OH)<sub>2</sub>
        </div>
      )
    },

    /*
     **********************************************************************/
    {
      name: "сульфат натрия",
      text: "",
      type: "Соль",
      formula: (
        <div>
          Na<sub>2</sub>SO<sub>4</sub>
        </div>
      )
    },
    {
      name: "хлорид меди (II)",
      text: "",
      type: "Соль",
      formula: (
        <div>
          CuCl<sub>2</sub>
        </div>
      )
    },
    {
      name: "карбонат калия",
      text: "",
      type: "Соль",
      formula: (
        <div>
          К<sub>2</sub>CO<sub>3</sub>
        </div>
      )
    },
    {
      name: "силикат бария",
      text: "",
      type: "Соль",
      formula: (
        <div>
          ВаSiO<sub>3</sub>
        </div>
      )
    },

    /*
     **********************************************************************/
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          SO<sub>3</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          P<sub>2</sub>O<sub>5</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          CO<sub>2</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          N<sub>2</sub>O<sub>3</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Cl<sub>2</sub>O<sub>7</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          WO<sub>3</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          SiO<sub>2</sub>
        </div>
      )
    },
    {
      name: "Кислотный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Mn<sub>2</sub>O<sub>7</sub>
        </div>
      )
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: <div>CuO</div>
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Na<sub>2</sub>O
        </div>
      )
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Li<sub>2</sub>O
        </div>
      )
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: <div>BaO</div>
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: <div>CoO</div>
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: <div>FeO</div>
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: <div>SrO</div>
    },
    {
      name: "Основной оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Cu<sub>2</sub>O
        </div>
      )
    },
    {
      name: "амфотерный оксид",
      text: "",
      type: "Оксид",
      formula: <div>ZnO</div>
    },
    {
      name: "амфотерный оксид",
      text: "",
      type: "Оксид",
      formula: <div>BeO</div>
    },
    {
      name: "амфотерный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Al<sub>2</sub>O<sub>3</sub>
        </div>
      )
    },
    {
      name: "амфотерный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          Fe<sub>2</sub>O<sub>3</sub>
        </div>
      )
    },
    {
      name: "амфотерный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          PbO<sub>2</sub>
        </div>
      )
    },
    {
      name: "амфотерный оксид",
      text: "",
      type: "Оксид",
      formula: (
        <div>
          MnO<sub>2</sub>
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
  ]
  // "9_класс": [
  //   {
  //     name: "Cульфит натрия",
  //     text: "Cульфит натрия",
  //     type: "Соль",
  //     formula: (
  //       <div>
  //         Na<sub>2</sub>SO<sub>3</sub>
  //       </div>
  //     )
  //   }
  // ],
  // "10_класс": [
  //   {
  //     name: "Вода (оксид водорода)",
  //     text: "Вода",
  //     type: "Оксид",
  //     formula: (
  //       <div>
  //         H<sub>2</sub>O
  //       </div>
  //     )
  //   }
  // ]
};

export const GRADE_CLASS_ARRAY = Object.keys(formulas);
