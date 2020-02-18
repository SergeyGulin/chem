const txt = `

NO Несолеобразующий оксид
N2O Несолеобразующий оксид
CO Несолеобразующий оксид
SiO Несолеобразующий оксид


SO3  Кислотный оксид
P2O5  Кислотный оксид
CO2 Кислотный оксид
N2O3 Кислотный оксид
Cl2O7 Кислотный оксид
WO3 Кислотный оксид
SiO2 Кислотный оксид
Mn2O7 Кислотный оксид
Cl2O3 Кислотный оксид
NO2 Кислотный оксид
CrO3 Кислотный оксид
V2O5 Кислотный оксид
SeO3 Кислотный оксид
Br2O5 Кислотный оксид
As2O5 Кислотный оксид


CuO Основной оксид
Na2O Основной оксид
Li2O Основной оксид
BaO Основной оксид
CoO Основной оксид
FeO Основной оксид
SrO Основной оксид
Cu2O Основной оксид
K2O Основной оксид
Ag2O Основной оксид
CrO Основной оксид
Rb2O Основной оксид
GeО Основной оксид
HgО Основной оксид
PbО  Основной оксид

ZnO  амфотерный оксид
BeO  амфотерный оксид
Al2O3  амфотерный оксид
Fe2O3  амфотерный оксид
PbO2  амфотерный оксид
MnO2  амфотерный оксид
Cr2O3  амфотерный оксид
SnO2  амфотерный оксид
TiO2  амфотерный оксид
GeО2  амфотерный оксид
Sc2O3  амфотерный оксид

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
      type: text,
      formula: `(<div>${fff}</div>)`
    };
  });
  console.log("result = ", result);
  console.log("===", JSON.stringify(result));
};
