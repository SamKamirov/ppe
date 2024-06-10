import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TEmployee } from "../../types/ppe";
import dayjs from "dayjs";

type Props = {
    employee: TEmployee;
    onClick: Dispatch<SetStateAction<boolean>>;
};

export const EmployeeTableRow = ({ employee, onClick }: Props) => {
    const handleClick = () => onClick(true);

    const formattedEnterDate = employee.enterDate && dayjs(employee.enterDate).format('DD.MM.YYYY')
    const formattedChangePositionDate = employee.changePositionDate && dayjs(employee.changePositionDate).format('DD.MM.YYYY')


    return (
        <tr className='text-center table-row' onClick={handleClick}>
            <td className='text-center align-middle'>{employee.id}</td>
            <td className='text-center align-middle'>{employee.personellNumber}</td>
            <td className='text-center align-middle'>{employee.firstName}</td>
            <td className='text-center align-middle'>{employee.middleName}</td>
            <td className='text-center align-middle'>{employee.lastName}</td>
            <td className='text-center align-middle'>{employee.structuralUnit}</td>
            <td className='text-center align-middle'>{employee.position}</td>
            <td className='text-center align-middle'>{formattedEnterDate}</td>
            <td className='text-center align-middle'>{formattedChangePositionDate}</td>
            <td className='text-center align-middle'>{employee.sex}</td>
            <td className='text-center align-middle'>{employee.height}</td>
            <td className='text-center align-middle'>{employee.clothesSize}</td>
            <td className='text-center align-middle'>{employee.shoeSize}</td>
            <td className='text-center align-middle'>{employee.headwearSize}</td>
            <td className='text-center align-middle'>{employee.gasMaskSize}</td>
        </tr>
    );
};