import React from 'react';

export type ButtonClickedType =
    | 'Кислота'
    | 'Соль'
    | 'Основание'
    | 'Оксид'
    | 'Основной'
    | 'Амфотерный'
    | 'Кислотный'
    | 'Несолеобразующий'
    | 'Основания'
    | 'Амфотерные'
    | 'Кислоты'
    | 'Другое'
    | 'По катиону'
    | 'По аниону'
    | 'Гидролиз не возможен'
    | 'И по катиону, и по аниону';

export const getButtonNames = (grade: string): ButtonClickedType[] => {
    switch (grade) {
        case 'Вещества':
            return ['Кислота', 'Соль', 'Основание', 'Оксид'];
        case 'Оксиды':
            return ['Основной', 'Амфотерный', 'Кислотный', 'Несолеобразующий'];
        case 'Гидроксиды':
            return ['Основания', 'Амфотерные', 'Кислоты', 'Другое'];
        case 'Гидролиз':
            return ['По катиону', 'По аниону', 'Гидролиз не возможен', 'И по катиону, и по аниону'];

        default:
            throw new Error('Unknown grade = ' + grade);
    }
};

export type ChemicalType = {
    name: string;
    type: ButtonClickedType;
    formula: string;
    text: string;
};

export function reshuffle<T>(arr: T[]): T[] {
    const arr1 = arr.map((item: T): [number, T] => [Math.random(), item]);
    arr1.sort((a, b) => a[0] - b[0]);
    return arr1.map((pair) => pair[1]);
}

// export function reshuffle<T>(arr: T[]): T[] { return arr;}


export const formulas: { [key: string]: ChemicalType[] } = {
    Вещества: [
        {
            name: 'азотная кислота',
            text: '',

            type: 'Кислота',
            formula: 'HNO3',
        },
        {
            name: 'азотистая кислота',
            text: '',

            type: 'Кислота',
            formula: 'НNO2',
        },
        {
            name: 'фтороводородная (плавиковая ) кислота',
            text: '',

            type: 'Кислота',
            formula: 'HF',
        },
        {
            name: 'борная кислота',
            text: '',

            type: 'Кислота',
            formula: 'Н3ВО3',
        },
        {
            name: 'хлороводородная кислота',
            text: '',

            type: 'Кислота',
            formula: 'HCl',
        },
        {
            name: 'уксусная кислота',
            text: '',

            type: 'Кислота',
            formula: 'СН3СООН',
        },
        {
            name: 'бромоводородная кислота',
            text: '',

            type: 'Кислота',
            formula: 'HBr',
        },
        {
            name: 'муравьиная кислота',
            text: '',

            type: 'Кислота',
            formula: 'НСООН',
        },
        {
            name: 'иодоводородная кислота',
            text: '',

            type: 'Кислота',
            formula: 'HI',
        },
        {
            name: 'синильная кислота кислота',
            text: '',

            type: 'Кислота',
            formula: 'НСN',
        },
        {
            name: 'серная кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2SO4',
        },
        {
            name: 'дихромовая кислота',
            text: '',

            type: 'Кислота',
            formula: 'Н2Сr2O7',
        },
        {
            name: 'сернистая кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2SO3',
        },
        {
            name: 'хлорноватистая кислота',
            text: '',

            type: 'Кислота',
            formula: 'НСlO',
        },
        {
            name: 'сероводородная кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2S',
        },
        {
            name: 'хлорноватая кислота',
            text: '',

            type: 'Кислота',
            formula: 'HClO3',
        },
        {
            name: 'мышьяковая кислота',
            text: '',

            type: 'Кислота',
            formula: 'H3AsO4',
        },
        {
            name: 'угольная кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2CO3',
        },
        {
            name: 'селеновая кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2SO4',
        },
        {
            name: 'кремниевая кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2SiO3',
        },
        {
            name: 'селеноводородная кислота',
            text: '',

            type: 'Кислота',
            formula: 'H2Sе',
        },
        {
            name: 'фосфорная (ортофосфорная) кислота',
            text: '',

            type: 'Кислота',
            formula: 'H3PO4',
        },

        /*
         **********************************************************************/
        {
            name: 'Гидроксид лития',
            text: '',

            type: 'Основание',
            formula: 'LiOH',
        },
        {
            name: 'Гидроксид натрия',
            text: '',

            type: 'Основание',
            formula: 'NaOH',
        },
        {
            name: 'Гидроксид калия',
            text: '',

            type: 'Основание',
            formula: 'KOH',
        },
        {
            name: 'Гидроксид рубидия',
            text: '',

            type: 'Основание',
            formula: 'RbOH',
        },

        {
            name: 'Гидроксид цезия',
            text: '',

            type: 'Основание',
            formula: 'CsOH',
        },
        {
            name: 'Гидроксид меди(I)',
            text: '',

            type: 'Основание',
            formula: 'CuOH',
        },
        {
            name: 'Гидроксид кальция',
            text: '',

            type: 'Основание',
            formula: 'Ca(OH)2',
        },
        {
            name: 'Гидроксид меди(II)',
            text: '',

            type: 'Основание',
            formula: 'Cu(OH)2',
        },
        {
            name: 'Гидроксид железа(II)',
            text: '',

            type: 'Основание',
            formula: 'Fe(OH)2',
        },
        {
            name: 'Гидроксид бария',
            text: '',

            type: 'Основание',
            formula: 'Ba(OH)2',
        },
        {
            name: 'Гидроксид кобальта(II)',
            text: '',

            type: 'Основание',
            formula: 'Co(OH)2',
        },
        {
            name: 'Гидроксид никеля (II)',
            text: '',

            type: 'Основание',
            formula: 'Ni(OH)2',
        },
        {
            name: 'Гидроксид свинца (II)',
            text: '',

            type: 'Основание',
            formula: 'Pb(OH)2',
        },
        /*
         **********************************************************************/
        {
            name: 'гидроксид марганца (II)',
            text: '',

            type: 'Основание',
            formula: 'Mn(OH)2',
        },

        /*
         **********************************************************************/
        {
            name: 'сульфат натрия',
            text: '',

            type: 'Соль',
            formula: 'Na2SO4',
        },
        {
            name: 'хлорид меди (II)',
            text: '',

            type: 'Соль',
            formula: 'CuCl2',
        },
        {
            name: 'карбонат калия',
            text: '',

            type: 'Соль',
            formula: 'К2CO3',
        },
        {
            name: 'силикат бария',
            text: '',

            type: 'Соль',
            formula: 'ВаSiO3',
        },

        /*
         **********************************************************************/
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'SO3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'P2O5',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'CO2',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'N2O3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'Cl2O7',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'WO3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'SiO2',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Оксид',
            formula: 'Mn2O7',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'CuO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'Na2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'Li2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'BaO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'CoO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'FeO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'SrO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Оксид',
            formula: 'Cu2O',
        },
        {
            name: 'амфотерный оксид',
            text: '',

            type: 'Оксид',
            formula: 'ZnO',
        },
        {
            name: 'амфотерный оксид',
            text: '',

            type: 'Оксид',
            formula: 'BeO',
        },
        {
            name: 'амфотерный оксид',
            text: '',

            type: 'Оксид',
            formula: 'Al2O3',
        },
        {
            name: 'амфотерный оксид',
            text: '',

            type: 'Оксид',
            formula: 'Fe2O3',
        },
        {
            name: 'амфотерный оксид',
            text: '',

            type: 'Оксид',
            formula: 'PbO2',
        },
        {
            name: 'амфотерный оксид',
            text: '',

            type: 'Оксид',
            formula: 'MnO2',
        },
        /*
         **********************************************************************/

        {
            name: 'Гидроксид аммония',
            text: 'Сульфид аммония',
            type: 'Основание',
            formula: 'NH4OH',
        },
        {
            name: 'Cульфит натрия',
            text: 'Cульфит натрия',
            type: 'Соль',
            formula: 'Na2SO3',
        },
        {
            name: 'Вода (оксид водорода)',
            text: 'Вода',
            type: 'Оксид',
            formula: 'H2O',
        },
    ],
    Оксиды: [
        {
            name: 'Несолеобразующий оксид',
            text: '',

            type: 'Несолеобразующий',
            formula: 'NO',
        },
        {
            name: 'Несолеобразующий оксид',
            text: '',

            type: 'Несолеобразующий',
            formula: 'N2O',
        },
        {
            name: 'Несолеобразующий оксид',
            text: '',

            type: 'Несолеобразующий',
            formula: 'CO',
        },
        {
            name: 'Несолеобразующий оксид',
            text: '',

            type: 'Несолеобразующий',
            formula: 'SiO',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'SO3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'P2O5',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'CO2',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'N2O3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'Cl2O7',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'WO3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'SiO2',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'Mn2O7',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'Cl2O3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'NO2',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'CrO3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'V2O5',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'SeO3',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'Br2O5',
        },
        {
            name: 'Кислотный оксид',
            text: '',

            type: 'Кислотный',
            formula: 'As2O5',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'CuO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'Na2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'Li2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'BaO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'CoO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'FeO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'SrO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'Cu2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'K2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'Ag2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'CrO',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'Rb2O',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'GeО',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'HgО',
        },
        {
            name: 'Основной оксид',
            text: '',

            type: 'Основной',
            formula: 'PbО ',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'ZnO',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'BeO',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'Al2O3',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'Fe2O3',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'PbO2',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'MnO2',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'Cr2O3',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'SnO2',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'TiO2',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'GeО2',
        },
        {
            name: 'Амфотерный оксид',
            text: '',

            type: 'Амфотерный',
            formula: 'Sc2O3',
        },
    ],
    Гидроксиды: [
        {
            name: 'гидроксид алюминия',
            text: '',
            type: 'Амфотерные',
            formula: 'Al(OH)3',
        },
        {
            name: 'гидроксид цинка',
            text: '',

            type: 'Амфотерные',
            formula: 'Zn(OH)2',
        },
        {
            name: 'гидроксид бериллия',
            text: '',

            type: 'Амфотерные',
            formula: 'Be(OH)2',
        },
        {
            name: 'гидроксид хрома(III)',
            text: '',

            type: 'Амфотерные',
            formula: 'Cr(OH)3',
        },
        {
            name: 'гидроксид марганца (IV)',
            text: '',

            type: 'Амфотерные',
            formula: 'Mn(OH)4',
        },
        {
            name: 'гидроксид cвинца (IV)',
            text: '',

            type: 'Амфотерные',
            formula: 'Pb(OH)4',
        },
        {
            name: 'гидроксид марганца (II)',
            text: '',

            type: 'Амфотерные',
            formula: 'Mn(OH)2',
        },
        // ***************************************************************
        { name: '', text: '', type: 'Основания', formula: 'LiOH' },
        { name: '', text: '', type: 'Основания', formula: 'NaOH' },
        { name: '', text: '', type: 'Основания', formula: 'KOH' },
        { name: '', text: '', type: 'Основания', formula: 'RbOH' },
        { name: '', text: '', type: 'Основания', formula: 'LiOH' },
        { name: '', text: '', type: 'Основания', formula: 'CsOH' },
        { name: '', text: '', type: 'Основания', formula: 'CuOH' },
        { name: '', text: '', type: 'Основания', formula: 'Ca(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Cu(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Fe(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Ba(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Co(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Ni(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Pb(OH)2' },
        { name: '', text: '', type: 'Основания', formula: 'Mn(OH)2' },

        // ***************************************************************

        { name: 'азотная', text: '', type: 'Кислоты', formula: 'HNO3' },
        { name: 'азотистая кислота', text: '', type: 'Кислоты', formula: 'НNO2' },
        { name: 'борная (ортоборная кислота)', text: '', type: 'Кислоты', formula: 'Н3ВО3' },
        { name: 'уксусная кислота', text: '', type: 'Кислоты', formula: 'СН3СООН' },
        { name: 'муравьиная кислота', text: '', type: 'Кислоты', formula: 'НСООН' },
        { name: 'серная', text: '', type: 'Кислоты', formula: 'H2SO4' },
        { name: 'дихромовая кислота', text: '', type: 'Кислоты', formula: 'Н2Сr2O7' },
        { name: 'сернистая', text: '', type: 'Кислоты', formula: 'H2SO3' },
        { name: 'хлорноватистая кислота', text: '', type: 'Кислоты', formula: 'НСlO' },
        { name: 'хлорноватая кислота', text: '', type: 'Кислоты', formula: 'HClO3' },
        { name: 'мышьяковая кислота', text: '', type: 'Кислоты', formula: 'H3AsO4' },
        { name: 'угольная', text: '', type: 'Кислоты', formula: 'H2CO3' },
        { name: 'селеновая кислота', text: '', type: 'Кислоты', formula: 'H2SеO4' },
        // ***************************************************************

        { name: 'Карбонат кальция - Известняк', text: '', type: 'Другое', formula: 'CaCO3' },
        { name: 'Нитрат серебра - Ляпис', text: '', type: 'Другое', formula: 'AgNO3' },
        {
            name: 'Гидрокарбонат натрия - Питьевая сода',
            text: '',
            type: 'Другое',
            formula: 'NaHCO3',
        },
        { name: 'Карбонат калия - Поташ', text: '', type: 'Другое', formula: 'K2СO3' },
        { name: 'Хлорид ртути (II) - Сулема', text: '', type: 'Другое', formula: 'HgCl2' },
        { name: 'Силикат натрия', text: '', type: 'Другое', formula: 'Na2SiO3' },
        { name: 'селеноводородная', text: '', type: 'Другое', formula: 'H2Sе' },
        { name: 'Хлороводородная', text: '', type: 'Другое', formula: 'HCl' },
        { name: 'Йодоводородная', text: '', type: 'Другое', formula: 'HI' },
        { name: 'фтороводородная', text: '', type: 'Другое', formula: 'HF' },
        { name: 'Бромоводородная', text: '', type: 'Другое', formula: 'HBr' },
        { name: 'сульфат натрия', text: '', type: 'Другое', formula: 'Na2SO4' },
        { name: 'хлорид меди (II)', text: '', type: 'Другое', formula: 'CuCl2' },
        { name: 'карбонат калия', text: '', type: 'Другое', formula: 'К2CO3' },
        // ***************************************************************
    ],
    Гидролиз: [
        { name: '', text: '', type: 'По катиону', formula: 'FeCl3' },
        { name: '', text: '', type: 'По катиону', formula: 'CuSO4' },
        { name: '', text: '', type: 'По катиону', formula: 'Zn(NO3)2' },
        { name: '', text: '', type: 'По катиону', formula: 'NiCl2' },
        { name: '', text: '', type: 'По катиону', formula: 'MgSO4' },
        { name: '', text: '', type: 'По катиону', formula: 'NH4Cl' },
        { name: '', text: '', type: 'По катиону', formula: 'Fe(NO3)3' },
        { name: '', text: '', type: 'По катиону', formula: 'Al2(SO4)3' },
        { name: '', text: '', type: 'По катиону', formula: 'ZnBr2' },
        { name: '', text: '', type: 'По катиону', formula: '(NH4)2SO4' },
        { name: '', text: '', type: 'По катиону', formula: 'NH4H2PO4' },
        { name: '', text: '', type: 'По катиону', formula: 'BeSO4' },
        //
        { name: '', text: '', type: 'По аниону', formula: 'K2CO3' },
        { name: '', text: '', type: 'По аниону', formula: 'NaHCO3' },
        { name: '', text: '', type: 'По аниону', formula: '(CH3COO)2Ca' },
        { name: '', text: '', type: 'По аниону', formula: 'Na2S' },
        { name: '', text: '', type: 'По аниону', formula: 'LiHSO3' },
        { name: '', text: '', type: 'По аниону', formula: 'K2SO3' },
        { name: '', text: '', type: 'По аниону', formula: 'NaF' },
        { name: '', text: '', type: 'По аниону', formula: 'K2SiO3' },
        { name: '', text: '', type: 'По аниону', formula: 'Li2S' },
        { name: '', text: '', type: 'По аниону', formula: 'KCN' },
        { name: '', text: '', type: 'По аниону', formula: 'Ba(HCO3)2' },
        { name: '', text: '', type: 'По аниону', formula: 'NaNO2' },
//
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'RbCl' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'BaSO4' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'KMnO4' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'CaCO3' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'K2SO4' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'NaHSO4' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'CaSO3' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'Ba(NO3)2' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'CsBr' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'NaClO4' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'KJ' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'PbS' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'KH2PO4' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'K2Cr2O7' },
        { name: '', text: '', type: 'Гидролиз не возможен', formula: 'LiNO3' },

        //
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: 'NH4HS' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: 'NaHF2' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: 'Al2S3' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: '(NH4)2CO3' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: 'NH4HCO3' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: 'CH3COONH4' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: '(NH4)3PO4' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: '(NH4)2HPO4' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: '(NH4)2S' },
        { name: '', text: '', type: 'И по катиону, и по аниону', formula: '(CH3COO)3Al' },

    ],
};

export const GRADE_CLASS_ARRAY = Object.keys(formulas);

export const formulaRender = (str: string) => {
    const arr: string[] = [];
    let akk: string[] = [];
    for (const char of str) {
        if (char >= '0' && char <= '9') {
            arr.push(akk.join(''));
            akk = [];
            arr.push(char);
        } else {
            akk.push(char);
        }
    }
    arr.push(akk.join(''));

    return (
        <div>
            {arr.map((item, index) =>
                index % 2 === 0 ? <span key={index}>{item}</span> : <sub key={index}>{item}</sub>,
            )}
        </div>
    );
};
