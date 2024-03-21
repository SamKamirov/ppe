import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../../components/sidebar';
import { Header } from '../../components/header';
import { FullHeight } from '../../components/full-height';
import { RouteChildren } from '../../types/utils';

export const RootLayout: FC<RouteChildren> = ({ children }) => {
    return (
        <section className='layout'>
            <Header />
            <section className='row full-height'>
                <SideBar />
                <FullHeight>
                    <Outlet />
                </FullHeight>
            </section>
        </section>
    );
};
