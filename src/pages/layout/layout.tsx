import React, { FC, ReactNode, useEffect, useState } from 'react';
import { SideBar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { FullHeight } from '../../components/full-height';
import { useAppSelector } from '../../app/hooks';
import { getLoadingState, getModalContentType, getSelectedPPE } from '../../store/app-data/app-data-selectors';
import { Loading } from '../../components/loading/loading';
import { TContainer } from '../../components/toast-container/toast-constainer';
import { isModal } from '../handbook/source';
import { ModalLayout } from '../../components/modals/modal-layout';
import { Preview } from '../../components/preview';
import { getMenuStatus, getUser } from '../../store/user-process/user-process-selectors';
import { SideMenu } from '../../components/side-menu/side-menu';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../../const';
import { getIsProfile } from './source';

type Props = {
    children: ReactNode;
};

export const RootLayout: FC<Props> = ({ children }) => {
    const isLoading = useAppSelector(getLoadingState);
    const modalContentType = useAppSelector(getModalContentType);
    const selectedPPE = useAppSelector(getSelectedPPE);
    const user = useAppSelector(getUser);

    if (isLoading) {
        return <Loading />
    };

    if (!user) {
        return <Loading />
    };

    if (!user) {
        return <Navigate to={AppRoutes.Login} />
    };

    return (
        <section className='layout'>
            <Header />
            <section className='row full-height'>
                <SideBar />
                <FullHeight>
                    <div className='col px-0 d-flex flex-column justify-content-between'>
                        {children}
                    </div>
                    {selectedPPE && <Preview ppe={selectedPPE} />}
                </FullHeight>
            </section>
            <TContainer />
            {isModal(modalContentType) && <ModalLayout contentType={modalContentType} />}
        </section>
    );
};
