import React, { Fragment, useRef } from 'react';
import { HandbookHeaders } from '../../components/handbook';
import { Preview } from '../../components/preview';
import { useAppSelector } from '../../app/hooks';
import { TableRow } from '../../components/table-row/table-row';
import { ControlButtons } from '../../components/handbook/handbook-control-buttons';
import { getModalContentType, getPPES, getSelectedPPE } from '../../store/app-data/app-data-selectors';
import { HandbookEmpty } from './handbook-empty';
import { ModalLayout } from '../../components/modals/modal-layout';
import { isModal } from './source';

export const Handbook = () => {
    const contentTable = useRef<HTMLTableElement>(null);

    const ppes = useAppSelector(getPPES);

    if (!ppes) {
        return <HandbookEmpty />
    }

    return (
        <Fragment>
            <div className='col px-0'>
                <ControlButtons />
                <table className='table table-striped' ref={contentTable}>
                    <HandbookHeaders />
                    <tbody className='table-group-divider'>
                        {ppes.map((ppe) => (
                            <TableRow ppe={ppe} key={ppe.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};
