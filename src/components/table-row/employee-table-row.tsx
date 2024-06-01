import React from "react";
import { Employee } from "../../types/ppe";

type Props = {
    employee: Employee;
};

export const EmployeeTableRow = ({ employee }: Props) => {
    return (
        <tr className='text-center table-row'>
            <td className='text-center align-middle'>{employee.id}</td>
        </tr>
    )
}