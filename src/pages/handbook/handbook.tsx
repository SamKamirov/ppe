import React, { Fragment, useRef, useState } from 'react';
import { HandbookHeaders } from '../../components/handbook';
import { ReportButtons } from '../../components/report/report-buttons';
import { Preview } from '../../components/preview';
import { useAppSelector } from '../../app/hooks';
import { TableRow } from '../../components/table-row/table-row';
import { ControlButtons } from '../../components/handbook/handbook-control-buttons';
import { AddPpeModal } from '../../components/modals/add-ppe';
import { getPPES, getSelectedPPE } from '../../store/app-data/app-data-selectors';
import { HandbookEmpty } from './handbook-empty';

export const Handbook = () => {
    const contentTable = useRef<HTMLTableElement>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const ppes = useAppSelector(getPPES);
    const selectedPPE = useAppSelector(getSelectedPPE);

    if (!ppes) {
        return <HandbookEmpty />
    }

    return (
        <Fragment>
            <div className='col px-0'>
                <ControlButtons onClick={setModalOpen} />
                {/* <ReportButtons ref={contentTable} /> */}
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
            {isModalOpen && <AddPpeModal onClose={setModalOpen} />}
        </Fragment>
    );
};
