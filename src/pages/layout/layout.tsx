import React, { FC } from 'react';
import { SideBar } from '../../components/sidebar';
import { Header } from '../../components/header/header';
import { FullHeight } from '../../components/full-height';
import { RouteChildren } from '../../types/utils';
import { TContainer } from '../../components/toast-container/toast-constainer';

export const RootLayout: FC<RouteChildren> = ({ children }) => {
    return (
        <section className='layout'>
            <Header />
            <section className='row full-height'>
                <SideBar />
                <FullHeight>
                    {children}
                </FullHeight>
            </section>
            <TContainer />
        </section>
    );
};
