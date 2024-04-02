import React, { Fragment, useRef } from 'react';
import { HandbookHeaders } from '../../components/handbook';
import { ReportButtons } from '../../components/report/report-buttons';
import { Preview } from '../../components/preview';
import { useAppSelector } from '../../app/hooks';
import { TableRow } from '../../components/table-row/table-row';

export const Handbook = () => {
    const ppes = useAppSelector((state) => state.ppes);
    const selectedPPE = useAppSelector((state) => state.ppe);

    const contentTable = useRef<HTMLTableElement>(null);

    return (
        <Fragment>
            <div className='col'>
                <ReportButtons ref={contentTable} />
                <table className='table table-striped' ref={contentTable}>
                    <HandbookHeaders />
                    <tbody className='table-group-divider'>
                        {ppes.map((ppe) => (
                            <TableRow ppe={ppe} key={ppe.id} />
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedPPE && <Preview ppe={selectedPPE} />}
        </Fragment>
    );
};
