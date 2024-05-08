import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPPEAction, fetchSizesReport } from "../../api/api-actions";
import { getSizesReport } from "../../store/report-data/report-data-selectors";
import { SizeReportTableRow } from "../../components/table-row/size-report-table-row";
import { Navbar } from "../../components/navbars/navbar";
import { NavbarTypes } from "../../components/navbars/source";
import { Loading } from "../../components/loading/loading";

export const Sizes = () => {
    const dispatch = useAppDispatch();
    const tableRef = useRef(null);

    useEffect(() => {
        dispatch(fetchPPEAction(null));
        dispatch(fetchSizesReport());
    }, [dispatch]);

    const sizes = useAppSelector(getSizesReport);


    if (!sizes) {
        return <Loading />
    };

    return (
        <section>
            <h1 className='mx-2 my-2'>Размеры</h1>
            <Navbar type={NavbarTypes.SizesReport} tableRef={tableRef} />
            <table className='table table-striped' ref={tableRef}>
                <thead className="content-headers">
                    <tr>
                        <th className="headers__item text-center align-middle">Фамилия</th>
                        <th className="headers__item text-center align-middle">Имя</th>
                        <th className="headers__item text-center align-middle">Отчество</th>
                        <th className="headers__item text-center align-middle">Табельный номер</th>
                        <th className="headers__item text-center align-middle">Структурное подразделение</th>
                        <th className="headers__item text-center align-middle">Должность</th>
                        <th className="headers__item text-center align-middle">Размер одежды</th>
                        <th className="headers__item text-center align-middle">Размер обуви</th>
                        <th className="headers__item text-center align-middle">Размер головного убора</th>
                        <th className="headers__item text-center align-middle">Размер противогаза</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {sizes.map((size) => <SizeReportTableRow sizeItem={size} key={size.personellNumber} />)}
                </tbody>
            </table>
        </section>
    )
}