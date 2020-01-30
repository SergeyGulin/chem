const txt = `
SO3 Кислотный оксид
P2O5 Кислотный оксид
CO2 Кислотный оксид
N2O3 Кислотный оксид
Cl2O7 Кислотный оксид
WO3 Кислотный оксид
SiO2 Кислотный оксид
Mn2O7 Кислотный оксид

CuO Основной оксид
Na2O Основной оксид
Li2O Основной оксид
BaO Основной оксид
CoO Основной оксид
FeO Основной оксид
SrO Основной оксид
Cu2O Основной оксид

ZnO амфотерный оксид
BeO амфотерный оксид
Al2O3 амфотерный оксид
Fe2O3 амфотерный оксид
PbO2 амфотерный оксид
MnO2 амфотерный оксид
`;

export const convert = () => {
  const regex = /\t/gi;

  const arr = txt
    .replace(regex, " ")
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
      text: "",
      type: "Оксид",
      formula: `(<div>${fff}</div>)`
    };
  });
  console.log("result = ", result);
  console.log("===", JSON.stringify(result));
};

// function kv1(a: number) {
//   return a * a;
// }

// const kv2 = function(a: number) {
//   return a * a;
// };

// const kv3 = (a: number) => a * a;
// const kv4 = (a: number) => a * a;
// const kv5 = (a: number) => {
//   return a * a;
// };

// console.log("kv1(5) = ", kv1(5)); //  kv1(5) = 25
// console.log("kv2(5) = ", kv2(5)); //  kv1(5) = 25
// console.log("kv3(5) = ", kv3(5)); //  kv1(5) = 25
// console.log("kv4(5) = ", kv4(5)); //  kv1(5) = 25
// console.log("kv5(5) = ", kv5(5)); //  kv1(5) = 25
