import React, { FC } from "react";
import { TRow } from "../../types/ppe";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEAction } from "../../api/api-actions";

export const PeriodsTableRow: FC<TRow> = ({ ppe }) => {
    const { id, fullname, lifeSpan } = ppe;


    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(fetchPPEAction(id));

    return (
        <tr className='text-start table-row' onClick={handleClick}>
            <td className='text-start'>{fullname}</td>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{lifeSpan}</td>
        </tr>
    );
};