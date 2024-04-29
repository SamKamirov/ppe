export type PPE = {
    id: number;
    fullname: string;
    shortname: string;
    lifeSpan: number;
    toBeReturned: number;
    isKit: number;
    sizeType: number;
    unitType: string;
};

export type Range = {
    fullTitle: string;
    min_size: string;
    max_size: string;
};

export type SetRule = {
    setRuleItem: Rule
}

export type Rule = {
    ppe: string;
    period: string;
    amount: number,
    dateStart: Date;
    dateEnd: Date,
    employee: string,
    sertificate: string;
};

export type TRange = { range: Range };

export type TPreview = {ppe: PPE};

export type AppProps = {ppes: PPE[]};

export type TRow = {ppe: PPE};

export type TAddPPE = Omit<PPE, "id">;

export type Sertificate = {
    id: number;
    title: string;
}

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
}

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