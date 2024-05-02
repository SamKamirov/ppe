import { MutableRefObject, useCallback } from "react";
import { utils, writeFile } from "xlsx";
import { SortTypes } from "../../../../const";

type TSaveToFile = {
    currentRef: MutableRefObject<HTMLTableElement>;
    title: string;
}

export enum NavbarTypes {
    Index = 'Index',
    PPEUsing = 'PPEUsing',
    SizesReport = 'SizesReport',
    RuleCheck = 'RuleCheck',
    Give = 'Give'
}

export const saveToFile = ({currentRef, title}: TSaveToFile) => {
    if (currentRef) {
        const report = utils.table_to_book(currentRef.current);
        // const max_width = report.reduce((w, r) => Math.max(w, r.name.length), 10);
        // worksheet["!cols"] = [{ wch: max_width }];
        writeFile(report, `${title}.xls`);
    }
};

export type PPESortingElement = {
    title: string;
    type: SortTypes;
}

export const PPESortingElements: PPESortingElement[] = [
    {
        title: 'Код',
        type: SortTypes.Alphabet
    },
    {
        title: 'По алфавиту',
        type: SortTypes.ID
    },
]