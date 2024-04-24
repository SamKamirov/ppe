import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { TAct } from "../../types/ppe";

type Props = {
    act: TAct;
}

export const ActTableRow: FC<Props> = ({ act }) => {
    const { id, actTitle, actTitleFull } = act;

    const dispatch = useAppDispatch();
    const handleClick = () => console.log(id);

    return (
        <tr className='text-start table-row' onClick={handleClick}>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{actTitle}</td>
            <td className='text-start'>{actTitleFull}</td>
        </tr>
    )
}