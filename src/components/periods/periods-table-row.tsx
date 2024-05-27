import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEAction } from "../../api/api-actions";
import { TPeriodsTableRow } from "../../types/ppe";

export const PeriodsTableRow: FC<TPeriodsTableRow> = ({ period }) => {
    const { id, frequency } = period;

    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(fetchPPEAction(id));

    return (
        <tr className='text-start table-row' onClick={handleClick}>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{frequency}</td>
        </tr>
    );
};