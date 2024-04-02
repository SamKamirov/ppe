import React, { FC, ReactNode } from 'react';

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
