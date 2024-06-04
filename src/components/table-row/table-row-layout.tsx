import React, { Dispatch, FC, SetStateAction } from "react";
import { TableRowTypes } from "./source";
import { PPETableRow } from "./ppe-table-row";
import { TEmployee, PPE, RuleReport, Sertificate } from "../../types/ppe";
import { SertificateTableRow } from "./act-table-row";
import { SizeReportTableRow } from "./size-report-table-row";
import { SizesReport } from "../../store/report-data/report-data";
import { RuleReportTableRow } from "./rule-report-table-row";
import { EmployeeTableRow } from "./employee-table-row";

type TTableRow = {
    type: TableRowTypes;
    ppe?: PPE;
    sertificate?: Sertificate;
    sizeReportItem?: SizesReport
    rule?: RuleReport,
    employee?: TEmployee,
    onClick?: Dispatch<SetStateAction<boolean>>;
}

export const TableRow: FC<TTableRow> = ({ type, ppe, sertificate, sizeReportItem, rule, employee, onClick }) => {
    switch (type) {
        case TableRowTypes.PPE: return <PPETableRow ppe={ppe} key={ppe.id} />
        case TableRowTypes.ACT: return <SertificateTableRow sertificate={sertificate} key={sertificate.id} />
        case TableRowTypes.SizeReport: return <SizeReportTableRow sizeItem={sizeReportItem} key={sizeReportItem.personellNumber} />
        case TableRowTypes.RuleReport: return <RuleReportTableRow rule={rule} key={rule.firstName} />
        case TableRowTypes.Employee: return <EmployeeTableRow employee={employee} onClick={onClick} key={employee.id} />
    }
}