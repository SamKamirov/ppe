import React, { FC } from 'react';
import { SideBar } from '../../components/sidebar';
import { Header } from '../../components/header/header';
import { FullHeight } from '../../components/full-height';
import { RouteChildren } from '../../types/utils';
import { useAppSelector } from '../../app/hooks';
import { getLoadingState, getModalContentType, getSelectedPPE } from '../../store/app-data/app-data-selectors';
import { Loading } from '../../components/loading/loading';
import { toast } from 'react-toastify';
import { TContainer } from '../../components/toast-container/toast-constainer';
import { isModal } from '../handbook/source';
import { ModalLayout } from '../../components/modals/modal-layout';
import { Preview } from '../../components/preview';

export const RootLayout: FC<RouteChildren> = ({ children }) => {
    const isLoading = useAppSelector(getLoadingState);
    const modalContentType = useAppSelector(getModalContentType);
    const selectedPPE = useAppSelector(getSelectedPPE);

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='layout'>
            <Header />
            <section className='row full-height'>
                <SideBar />
                <FullHeight>
                    <div className='col px-0 d-flex flex-column justify-content-between'>
                        {children}
                        {selectedPPE && <Preview ppe={selectedPPE} />}
                    </div>
                </FullHeight>
            </section>
            <TContainer />
            {isModal(modalContentType) && <ModalLayout contentType={modalContentType} />}
        </section>
    );
};
