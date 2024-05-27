import React, { FC } from "react";
import { TRange } from "../../types/ppe";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEAction } from "../../api/api-actions";

export const RangesTableRow: FC<TRange> = ({ range }) => {
    const { chestSize, waistSize, neckSize, letterReference, localSize, chestInterval, waistInterval, sizeType } = range;
    // const dispatch = useAppDispatch();
    // const handleClick = () => dispatch(fetchPPEAction({ range }));

    return (
        <tr className='text-start table-row'>
            <td className='text-start'>{chestSize}</td>
            <td className='text-start'>{waistSize}</td>
            <td className='text-start'>{neckSize}</td>
            <td className='text-start'>{letterReference}</td>
            <td className='text-start'>{localSize}</td>
            <td className='text-start'>{chestInterval}</td>
            <td className='text-start'>{waistInterval}</td>
            <td className='text-start'>{sizeType}</td>
        </tr>
    );
};