import React, { FC, ReactNode, useEffect, useState } from 'react';
import { SideBar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { FullHeight } from '../../components/full-height';
import { useAppSelector } from '../../app/hooks';
import { getLoadingState, getModalContentType, getSelectedPPE } from '../../store/app-data/app-data-selectors';
import { Loading } from '../../components/loading/loading';
import { isModal } from '../handbook/source';
import { ModalLayout } from '../../components/modals/modal-layout';
import { Preview } from '../../components/preview';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
    const isLoading = useAppSelector(getLoadingState);
    const modalContentType = useAppSelector(getModalContentType);
    const selectedPPE = useAppSelector(getSelectedPPE);

    if (isLoading) {
        return <Loading />
    };

    return (
        <section className='layout'>
            <Header />
            <section className='row full-height'>
                <SideBar />
                <FullHeight>
                    <div className='col px-0 d-flex flex-column justify-content-between'>
                        <Outlet />
                    </div>
                    {selectedPPE && <Preview ppe={selectedPPE} />}
                </FullHeight>
            </section>
            {isModal(modalContentType) && <ModalLayout contentType={modalContentType} />}
        </section>
    );
};
