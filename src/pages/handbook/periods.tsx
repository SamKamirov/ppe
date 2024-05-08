import React from "react";
import { PeriodsHeaders } from "../../components/periods/periods-headers";
import { useAppSelector } from "../../app/hooks";
import { PeriodsTableRow } from "../../components/periods/periods-table-row";
import { getPPES } from "../../store/app-data/app-data-selectors";
import { Loading } from "../../components/loading/loading";

export const Periods = () => {
    const ppes = useAppSelector(getPPES);

    if (!ppes) {
        return <Loading />
    }

    return (
        <div className="col px-0">
            <h2 className='mx-2 my-2'>Периодичность</h2>
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