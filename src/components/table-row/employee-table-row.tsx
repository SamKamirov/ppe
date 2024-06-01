import React from "react";
import { Employee } from "../../types/ppe";

type Props = {
    employee: Employee;
};

export const EmployeeTableRow = ({ employee }: Props) => {
    return (
        <tr className='text-center table-row'>
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
    )
}