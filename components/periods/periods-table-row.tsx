import React, { FC } from "react";
import { TRow } from "../../types/ppe";
import { useAppDispatch } from "../../app/hooks";
import { selectPPE } from "../../store/action";

export const PeriodsTableRow: FC<TRow> = ({ ppe }) => {
    const { id, fullTitle, lifespan } = ppe;
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(selectPPE({ ppe }));

    return (
        <tr className='text-start table-row' onClick={handleClick}>
            <td className='text-start'>{fullTitle}</td>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{lifespan}</td>
        </tr>
    );
};