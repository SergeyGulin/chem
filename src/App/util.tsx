import React from "react";

const txt = `
HNO3 азотная
НNO2 азотистая кислота
 HF фтороводородная (плавиковая )
Н3ВО3 борная
 HCl хлороводородная
СН3СООН уксусная кислота
 HBr бромоводородная
НСООН муравьиная кислота
 HI иодоводородная
НСN синильная кислота
 H2SO4 серная
Н2Сr2O7   дихромовая кислота
 H2SO3 сернистая
НСlO   хлорноватистая кислота
 H2S сероводородная
HClO3 хлорноватая кислота
H3AsO4  мышьяковая кислота
 H2CO3 угольная
H2SO4 селеновая кислота
 H2SiO3 кремниевая
H2Sе селеноводородная
 H3PO4 фосфорная (ортофосфорная)
`;

export const convert = () => {
  const arr = txt
    .split("\n")
    .map(line => {
      const arr2 = line.trim().split(" ");
      const formulaTxt = arr2[0];
      const text = arr2.slice(1).join(" ");

      return { formulaTxt, text };
    })
    .filter(({ formulaTxt }) => formulaTxt !== "");

  console.log("arr = ", arr);

  const result = arr.map(({ formulaTxt, text }) => {
    const fff = formulaTxt
      .split("")
      .map(char => (char >= "0" && char <= "9" ? `<sub>${char}</sub>` : char))
      .join("");

    return {
      name: text,
      text: "нет подсказки",
      type: "Кислота",
      formula: `(<div>${fff}</div>)`
    };
  });
  console.log("result = ", result);
  console.log("===", JSON.stringify(result));
};
