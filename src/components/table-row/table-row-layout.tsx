import React, { FC } from "react";
import { TableRowTypes } from "./source";
import { PPETableRow } from "./ppe-table-row";
import { PPE, Sertificate } from "../../types/ppe";
import { SertificateTableRow } from "./act-table-row";
import { SizeReportTableRow } from "./size-report-table-row";
import { SizesReport } from "../../store/report-data/report-data";

type TTableRow = {
    type: TableRowTypes;
    ppe?: PPE;
    sertificate?: Sertificate;
    sizeReportItem?: SizesReport
}

export const TableRow: FC<TTableRow> = ({ type, ppe, sertificate, sizeReportItem }) => {
    switch (type) {
        case TableRowTypes.PPE: return <PPETableRow ppe={ppe} key={ppe.id} />
        case TableRowTypes.ACT: return <SertificateTableRow sertificate={sertificate} key={sertificate.id} />
        case TableRowTypes.SizeReport: return <SizeReportTableRow sizeItem={sizeReportItem} key={sizeReportItem.personellNumber} />
    }
}