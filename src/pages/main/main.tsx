import React from "react";
import { Outlet } from "react-router-dom";
import { RootLayout } from "../layout/layout";

export const Main = () => {
    return (
        <RootLayout>
            <Outlet />
        </RootLayout>
    )
}