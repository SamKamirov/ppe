import React, { FC } from "react";
import { TRow } from "../../types/ppe";
import { useAppDispatch } from "../../app/hooks";
import { selectPPE } from "../../store/action";
import { fetchPPEAction } from "../../api/api-actions";

export const TableRow: FC<TRow> = ({ ppe }) => {
    const { id, fullname, shortname, unittype: unitType } = ppe;
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(fetchPPEAction(id));

    return (
        <tr className='text-start table-row' onClick={handleClick}>
            <td className='text-start'>{shortname}</td>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{fullname}</td>
            <td className='text-start'>{unitType}</td>
        </tr>
    );
};