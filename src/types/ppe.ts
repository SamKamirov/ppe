export type PPE = {
    id: number;
    fullname: string;
    shortname: string;
    sertificateId: number;
    lifeSpan: number;
    toBeReturned: number;
    isKit: number;
    sizeType: number;
    unitType: string;
}

export type Range = {
    fullTitle: string;
    min_size: string;
    max_size: string;
}

export type TRange = { range: Range };

export type TPreview = {ppe: PPE};

export type AppProps = {ppes: PPE[]};

export type TRow = {ppe: PPE};

export type TAddPPE = Omit<PPE, "id">;

export type TAct = {
    id: number;
    actTitle: string;
    actTitleFull: string;
}

export type TAddAct = Omit<TAct, 'id'>;

export type TUploadUsingAct = {
    act: TAddAct;
}

export type Sertificate = {
    id: number;
    title: string;
}