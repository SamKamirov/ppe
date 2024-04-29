import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Sertificate } from "../../types/ppe";

type Props = {
    sertificate: Sertificate;
}

export const SertificateTableRow: FC<Props> = ({ sertificate }) => {
    const { id, title } = sertificate;

    return (
        <tr className='text-start table-row'>
            <td className='text-start'>{id}</td>
            <td className='text-start'>{title}</td>
        </tr>
    )
}