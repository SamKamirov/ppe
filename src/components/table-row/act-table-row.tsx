import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Sertificate } from "../../types/ppe";

type Props = {
    act: Sertificate;
}

export const ActTableRow: FC<Props> = ({ act }) => {
    const { id, title } = act;

    return (
        <tr className='text-start table-row'>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{title}</td>
        </tr>
    )
}