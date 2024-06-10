import React from "react";
import { PeriodsHeaders } from "../../components/periods/periods-headers";
import { useAppSelector } from "../../app/hooks";
import { PeriodsTableRow } from "../../components/periods/periods-table-row";
import { getPeriods, getPPES } from "../../store/app-data/app-data-selectors";
import { Loading } from "../../components/loading/loading";
import { HandbookEmpty } from "./handbook-empty";

export const Periods = () => {
    const periods = useAppSelector(getPeriods);

    if (!periods) {
        return <HandbookEmpty />
    };

    return (
        <div className="col px-0">
            <h1 className='mx-2 my-2'>Периодичность</h1>
            <table className='table table-striped'>
                <PeriodsHeaders />
                <tbody className='table-group-divider'>
                    {periods.map((period) => (
                        <PeriodsTableRow period={period} key={period.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}