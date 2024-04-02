export type PPE = {
    id: number;
    title: string;
    fullTitle: string;
    unit: string;
    lifespan: number;
};

export type Range = {
    fullTitle: string;
    min_size: string;
    max_size: string;
}

export type TRange = { range: Range };

export type TPreview = {ppe: PPE};

export type AppProps = {ppes: PPE[]};

export type TRow = {ppe: PPE};