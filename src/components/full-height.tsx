import React, { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
    children?: ReactNode;
};

export const FullHeight: FC<Props> = ({ children }) => {
    return (
        <section className='col full-height'>
            <div className='row full-height'>{children}</div>
        </section>
    );
};
