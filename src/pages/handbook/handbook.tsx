import React, {Fragment, ReactNode, useEffect, useRef} from 'react';
import {HandbookHeaders} from '../../components/handbook/handbook-headers';
import {ReportButtons} from '../../components/report-buttons';

export const Handbook = (): ReactNode => {
    const contentTable = useRef<HTMLTableElement>(null);

    useEffect(() => {
        if (contentTable.current) {
            contentTable.current.focus();
        }
    }, []);

    return (
        <Fragment>
            <div className='col'>
                <h1>Справочник</h1>
                <ReportButtons ref={contentTable} />
                <table className='table' ref={contentTable}>
                    <HandbookHeaders />
                    <tbody>
                        <tr className='text-center'></tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};
