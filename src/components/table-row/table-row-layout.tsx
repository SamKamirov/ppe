import React, { FC } from "react";
import { TableRowTypes } from "./source";
import { PPETableRow } from "./ppe-table-row";
import { PPE, TAct } from "../../types/ppe";
import { ActTableRow } from "./act-table-row";

type TTableRow = {
    type: TableRowTypes;
    ppe?: PPE
    act?: TAct
}

export const TableRow: FC<TTableRow> = ({ type, ppe, act }) => {
    switch (type) {
        case TableRowTypes.PPE: return <PPETableRow ppe={ppe} key={ppe.id} />
        case TableRowTypes.ACT: return <ActTableRow act={act} key={act.id} />
    }
}