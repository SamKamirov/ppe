import React, { Fragment, useEffect, useRef } from 'react';
import { HandbookHeaders } from '../../components/handbook';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PPETableRow } from '../../components/table-row/ppe-table-row';
import { getPPES } from '../../store/app-data/app-data-selectors';
import { HandbookEmpty } from './handbook-empty';
import { fetchPPEAction } from '../../api/api-actions';
import { Navbar } from '../../components/navbars/navbar';
import { NavbarTypes } from '../../components/navbars/source';
import { TableRow } from '../../components/table-row/table-row-layout';
import { TableRowTypes } from '../../components/table-row/source';

export const Handbook = () => {
    const dispatch = useAppDispatch()
    const contentTable = useRef<HTMLTableElement>(null);
    const ppes = useAppSelector(getPPES);

    useEffect(() => {
        dispatch(fetchPPEAction(null))
    }, [dispatch])

    if (!ppes) {
        return <HandbookEmpty />
    }

    return (
        <section>
            <Navbar type={NavbarTypes.Index} tableRef={contentTable} />
            <table className='table table-striped' ref={contentTable}>
                <HandbookHeaders />
                <tbody className='table-group-divider'>
                    {ppes.map((ppe) => <TableRow type={TableRowTypes.PPE} ppe={ppe} key={ppe.id} />)}
                </tbody>
            </table>
        </section >
    );
};
