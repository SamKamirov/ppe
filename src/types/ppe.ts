import {Nullable} from 'vitest';

export type PPE = {
    id: number;
    fullname: string;
    shortname: string;
    lifeSpan: number;
    sertificateID: number;
    period: number;
    toBeReturned: number;
    isKit: number;
    sizeType: number;
    unitType: string;
};

export type Range = {
    chestSize: string;
    waistSize: string;
    neckSize: string;
    letterReference: string;
    localSize: string;
    chestInterval: string;
    waistInterval: string;
    sizeType: string;
};

export type SetRule = {
    setRuleItem: Rule;
};

export type Rule = {
    ppe: string;
    period: string;
    amount: number;
    dateStart: Date;
    dateEnd: Date;
    employee: string;
    sertificate: string;
};

export type TRange = {range: Range};

export type TPreview = {ppe: PPE};

export type AppProps = {ppes: PPE[]};

export type TRow = {ppe: PPE};

export type TAddPPE = Omit<PPE, 'id'>;

export type Sertificate = {
    id: number;
    title: string;
};

export type AddSertificate = Omit<Sertificate, 'id'>;

export type HeightRanges = {
    id: number;
    minHeight: number;
    maxHeight: number;
    sex: string;
};

export type Period = {
    id: number;
    frequency: string;
};

export type Employee = {
    id: number;
    personellNumber: number;
    firstName: string;
    middleName: string;
    lastName: string;
    structuralUnit: number;
    position: number;
    enterDate: string;
    changePositionDate: string;
    sex: string;
    height: number;
    clothesSize: string;
    shoeSize: number;
    headwearSize: string;
    gasMaskSize: string;
};

export type RuleReport = {
    firstName: string;
    middleName: string;
    lastName: string;
    structuralUnit: number;
    position: number;
    fullname: string;
};

export type SizeType = {
    id: number;
    title: string;
};

export type Size = {
    id: number;
    chestSize: Nullable<string>;
    waistSize: Nullable<string>;
    neckSize: Nullable<string>;
    letterReference: Nullable<string>;
    localSize: Nullable<string>;
    chestInterval: Nullable<string>;
    waistInterval: Nullable<string>;
    sizeType: Nullable<string>;
};
