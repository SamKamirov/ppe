import React, { Fragment, useRef } from 'react';
import { GiveReportHeaders } from '../../components/report/give-report-headers';
import { Navbar } from '../../components/navbars/navbar';
import { NavbarTypes } from '../../components/navbars/source';
import { TableRow } from '../../components/table-row/table-row-layout';
import { TableRowTypes } from '../../components/table-row/source';

export const Give = () => {
    const tableRef = useRef(null);
    return (
        <section>
            <h1 className='mx-2 my-2'>Выдача</h1>
            <Navbar type={NavbarTypes.Give} tableRef={tableRef} />
            <table className='table table-striped' ref={tableRef}>
                <GiveReportHeaders />
                <tbody className='table-group-divider'>
                    <TableRow type={TableRowTypes.Give} />
                </tbody>
            </table>
        </section>
    );
};
