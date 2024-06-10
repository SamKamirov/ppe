import React, { FC, ReactNode, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { Main } from "../main/main";
import { RootLayout } from "../layout/layout";
import { TContainer } from "../../components/toast-container/toast-constainer";

type Props = {
    children: ReactNode;
};

export const PrivateRoute = () => {
    const navigate = useNavigate();
    const user = useAppSelector(getUser);

    useEffect(() => {
        if (!user) {
            navigate(AppRoutes.Login);
        };
    });

    return (
        <RootLayout>
            <Outlet />
            <TContainer />
        </RootLayout>
    );
};