import React, { Fragment } from "react";
import { PeriodsHeaders } from "../../components/periods/periods-headers";
import { useAppSelector } from "../../app/hooks";
import { PeriodsTableRow } from "../../components/periods/periods-table-row";

export const Periods = () => {
    const ppes = useAppSelector((state) => state.ppes);

    return (
        <div className="col px-0">
            <h2>Периодичность</h2>
            <table className='table table-striped'>
                <PeriodsHeaders />
                <tbody className='table-group-divider'>
                    {ppes.map((ppe) => (
                        <PeriodsTableRow ppe={ppe} key={ppe.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}