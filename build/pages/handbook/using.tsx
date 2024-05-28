import React, { useEffect } from "react";
import { UsingHeaders } from "../../components/using-headers";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Navbar } from "../../components/navbars/navbar";
import { NavbarTypes } from "../../components/navbars/source";
import { getSertificates } from "../../store/app-data/app-data-selectors";
import { TableRow } from "../../components/table-row/table-row-layout";
import { TableRowTypes } from "../../components/table-row/source";
import { HandbookEmpty } from "./handbook-empty";
import { fetchPPEAction } from "../../api/api-actions";

export const Using = () => {
    const dispatch = useAppDispatch();
    const sertificates = useAppSelector(getSertificates);

    useEffect(() => {
        dispatch(fetchPPEAction(null));
    }, [dispatch]);

    if (!sertificates) {
        return <HandbookEmpty />
    }

    return (
        <section className="using">
            <h1 className='mx-2 my-2'>Обоснование использования СИЗ</h1>
            <Navbar type={NavbarTypes.PPEUsing} />
            <table className="table">
                <UsingHeaders />
                <tbody>
                    {sertificates.map((sertificate) => <TableRow type={TableRowTypes.ACT} sertificate={sertificate} key={sertificate.id} />)}
                </tbody>
            </table>
        </section>
    )
}