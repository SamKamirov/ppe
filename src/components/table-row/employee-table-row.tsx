import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TEmployee } from "../../types/ppe";

type Props = {
    employee: TEmployee;
    onClick: Dispatch<SetStateAction<boolean>>;
};

export const EmployeeTableRow = ({ employee, onClick }: Props) => {
    const handleClick = () => onClick(true);

    return (
        <tr className='text-center table-row' onClick={handleClick}>
            <td className='text-center align-middle'>{employee.id}</td>
            <td className='text-center align-middle'>{employee.personellNumber}</td>
            <td className='text-center align-middle'>{employee.firstName}</td>
            <td className='text-center align-middle'>{employee.middleName}</td>
            <td className='text-center align-middle'>{employee.lastName}</td>
            <td className='text-center align-middle'>{employee.structuralUnit}</td>
            <td className='text-center align-middle'>{employee.position}</td>
            <td className='text-center align-middle'>{employee.enterDate}</td>
            <td className='text-center align-middle'>{employee.changePositionDate}</td>
            <td className='text-center align-middle'>{employee.sex}</td>
            <td className='text-center align-middle'>{employee.height}</td>
            <td className='text-center align-middle'>{employee.clothesSize}</td>
            <td className='text-center align-middle'>{employee.shoeSize}</td>
            <td className='text-center align-middle'>{employee.headwearSize}</td>
            <td className='text-center align-middle'>{employee.gasMaskSize}</td>
        </tr>
    );
};