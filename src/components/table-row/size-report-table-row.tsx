import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";

export type SizeItem = {
    personellNumber: number;
    firstName: string;
    middleName: string;
    lastName: string;
    structuralUnit: string;
    position: string;
    clothesSize: string;
    shoeSize: number;
    headwearSize: string;
    gasMaskSize: string;
}

type Props = {
    sizeItem: SizeItem;
}

export const SizeReportTableRow: FC<Props> = ({ sizeItem }) => {
    const { personellNumber, firstName, middleName, lastName, structuralUnit,
        position, clothesSize, shoeSize, headwearSize, gasMaskSize
    } = sizeItem;
    const dispatch = useAppDispatch();

    return (
        <tr className='text-center table-row'>
            <td className='text-center align-middle'>{firstName}</td>
            <td className='text-center align-middle'>{middleName}</td>
            <td className='text-center align-middle'>{lastName}</td>
            <td className='text-center align-middle'>{personellNumber}</td>
            <td className='text-center align-middle'>{structuralUnit}</td>
            <td className='text-center align-middle'>{position}</td>
            <td className='text-center align-middle'>{clothesSize}</td>
            <td className='text-center align-middle'>{shoeSize}</td>
            <td className='text-center align-middle'>{headwearSize}</td>
            <td className='text-center align-middle'>{gasMaskSize}</td>
        </tr>
    );
};