import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { RootLayout } from "../layout/layout";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { getLoadingState } from "../../store/app-data/app-data-selectors";
import { AppRoutes } from "../../../const";
import { Loading } from "../../components/loading/loading";

export const Main = () => {
    const navigate = useNavigate();
    const user = useAppSelector(getUser);
    const isLoading = useAppSelector(getLoadingState);

    useEffect(() => {
        if (!user) {
            navigate(AppRoutes.Login);
        };
    }, [user, navigate]);

    if (isLoading) {
        return <Loading />;
    };

    return (
        <RootLayout>
            <Outlet />
        </RootLayout>
    )
}