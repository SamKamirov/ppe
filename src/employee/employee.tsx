import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getEmployees } from "../store/app-data/app-data-selectors";
import { fetchEmployees } from "../api/api-actions";
import { TableRow } from "../components/table-row/table-row-layout";
import { TableRowTypes } from "../components/table-row/source";
import { HandbookEmpty } from "../pages/handbook/handbook-empty";
import { ProfileHeaders } from "../pages/profile/profile-headers";

export const Employee = () => {
    const dispatch = useAppDispatch();
    const employees = useAppSelector(getEmployees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    if (!employees) {
        return <HandbookEmpty />
    };

    return (
        <div>
            <table className='table table-striped'>
                <ProfileHeaders />
                <tbody className='table-group-divider'>
                    {employees && employees.map((item, index) => <TableRow type={TableRowTypes.Employee} employee={item} key={index} />)}
                </tbody>
            </table>
        </div>
    );
}