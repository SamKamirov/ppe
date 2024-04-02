import React, { FC, Fragment, PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = {
    children?: ReactNode
}

export const ContentLayout = () => {
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    )
}