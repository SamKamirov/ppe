import React, { FC } from "react";
import { TRange } from "../../types/ppe";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEAction } from "../../api/api-actions";

export const RangesTableRow: FC<TRange> = ({ range }) => {
    const { fullTitle, min_size, max_size } = range;
    // const dispatch = useAppDispatch();
    // const handleClick = () => dispatch(fetchPPEAction({ range }));

    return (
        <tr className='text-start table-row'>
            <td className='text-start'>{fullTitle}</td>
            <td className='text-start'>{min_size}</td>
            <td className='text-start'>{max_size}</td>
        </tr>
    );
};