import React, { useEffect } from "react";
import { UsingHeaders } from "../../components/using-headers";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchActsAction, fetchPPEAction } from "../../api/api-actions";
import { Navbar } from "../../components/navbars/navbar";
import { NavbarTypes } from "../../components/navbars/source";
import { getActs } from "../../store/app-data/app-data-selectors";
import { TableRow } from "../../components/table-row/table-row-layout";
import { TableRowTypes } from "../../components/table-row/source";
import { HandbookEmpty } from "./handbook-empty";

export const Using = () => {
    const acts = useAppSelector(getActs);

    if (!acts) {
        return <HandbookEmpty />
    }

    return (
        <section className="using">
            <h1>Обоснование использования СИЗ</h1>
            <Navbar type={NavbarTypes.PPEUsing} />
            <table className="table">
                <UsingHeaders />
                <tbody>
                    {acts.map((act) => <TableRow type={TableRowTypes.ACT} act={act} key={act.id} />)}
                </tbody>
            </table>
        </section>
    )
}