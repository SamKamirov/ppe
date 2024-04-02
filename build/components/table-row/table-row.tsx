import React, { FC } from "react";
import { TRow } from "../../types/ppe";
import { useAppDispatch } from "../../app/hooks";
import { selectPPE } from "../../store/action";

export const TableRow: FC<TRow> = ({ ppe }) => {
    const { id, title, fullTitle, unit } = ppe;
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(selectPPE({ ppe }));

    return (
        <tr className='text-start table-row' onClick={handleClick}>
            <td className='text-start'>{title}</td>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{fullTitle}</td>
            <td className='text-start'>{unit}</td>
        </tr>
    );
};