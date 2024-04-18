export type PPE = {
    id: number;
    title: string;
    fullTitle: string;
    unit: string;
    lifespan: number;
};

export type PPEFull = {
    id: number;
    fullname: string;
    shortname: string;
    sertificateid: number;
    startdate: Date;
    enddate: Date;
    tobereturned: number;
    isKit: number;
    sizetype: number;
    unittype: string;
}

export type Range = {
    fullTitle: string;
    min_size: string;
    max_size: string;
}

export type TRange = { range: Range };

export type TPreview = {ppe: PPE};

export type AppProps = {ppes: PPE[]};

export type TRow = {ppe: PPEFull};

export type TAddPPE = Omit<PPEFull, "id"> ;