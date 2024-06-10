import React, { useEffect, useRef } from 'react';
import { HandbookHeaders } from '../../components/handbook';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPPES, getSortType } from '../../store/app-data/app-data-selectors';
import { fetchPeriods, fetchPPEAction, fetchSertificates, fetchSizesTypes } from '../../api/api-actions';
import { Navbar } from '../../components/navbars/navbar';
import { NavbarTypes } from '../../components/navbars/source';
import { TableRow } from '../../components/table-row/table-row-layout';
import { TableRowTypes } from '../../components/table-row/source';
import { sortPPES } from './source';
import { Loading } from '../../components/loading/loading';

export const Handbook = () => {
    const dispatch = useAppDispatch()
    const contentTable = useRef<HTMLTableElement>(null);

    const sortType = useAppSelector(getSortType)
    const ppes = useAppSelector(getPPES);
    const sortedPPEs = sortPPES({ elements: ppes, type: sortType });

    useEffect(() => {
        dispatch(fetchPPEAction(null));
        dispatch(fetchPeriods());
        dispatch(fetchSizesTypes());
    }, [dispatch]);

    // if (!sortedPPEs) {
    //     return <Loading />
    // };

    return (
        <section>
            <h1 className='mx-2 my-2'>CИЗ</h1>
            <Navbar type={NavbarTypes.Index} tableRef={contentTable} />
            <table className='table table-striped' ref={contentTable}>
                <HandbookHeaders />
                <tbody className='table-group-divider'>
                    {sortedPPEs && sortedPPEs.map((ppe) => <TableRow type={TableRowTypes.PPE} ppe={ppe} key={ppe.id} />)}
                </tbody>
            </table>
        </section >
    );
};
