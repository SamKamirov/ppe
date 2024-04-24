import { MutableRefObject, useCallback } from "react";
import { utils, writeFile } from "xlsx";

type TSaveToFile = {
    currentRef: MutableRefObject<HTMLTableElement>
}

export enum NavbarTypes {
    Index = 'index',
    PPEUsing = 'ppeUsing'
}

export const saveToFile = ({currentRef}: TSaveToFile) => {
    if (currentRef) {
        const report = utils.table_to_book(currentRef.current);
        // const max_width = report.reduce((w, r) => Math.max(w, r.name.length), 10);
        // worksheet["!cols"] = [{ wch: max_width }];
        writeFile(report, 'Отчёт «Список элементов справочника».xls');
    }
};