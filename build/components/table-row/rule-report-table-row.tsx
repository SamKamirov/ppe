import React from "react";
import { FC } from "react";
import { RuleReport } from "../../types/ppe";

type Props = {
    rule: RuleReport
}

export const RuleReportTableRow: FC<Props> = ({ rule }) => {
    const { firstName, middleName, lastName, structuralUnit, position, fullname } = rule;

    return (
        <tr className='text-center table-row'>
            <td className='text-center align-middle'>{firstName} {middleName} {lastName}</td>
            <td className='text-center align-middle'>{structuralUnit}</td>
            <td className='text-center align-middle'>{position}</td>
            <td className='text-center align-middle'>{fullname}</td>
        </tr>
    );
};