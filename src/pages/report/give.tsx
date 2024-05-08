import React, { Fragment, useRef } from 'react';
import { GiveReportHeaders } from '../../components/report/give-report-headers';
import { Navbar } from '../../components/navbars/navbar';
import { NavbarTypes } from '../../components/navbars/source';

export const Give = () => {
    const tableRef = useRef(null);
    return (
        <section>
            <h1 className='mx-2 my-2'>Выдача</h1>
            <Navbar type={NavbarTypes.Give} tableRef={tableRef} />
            <table className='table table-striped' ref={tableRef}>
                <GiveReportHeaders />
                <tbody className='table-group-divider'>

                </tbody>
            </table>
        </section>
    );
};
