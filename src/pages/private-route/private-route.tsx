import React, { FC, Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { TContainer } from "../../components/toast-container/toast-constainer";
import { User } from "../../types/state";
import { getToken } from "../../components/login/source";

type Props = {
    user: User;
}

export const PrivateRoute = () => {
    const navigate = useNavigate();
    const user = useAppSelector(getUser);
    const token = getToken();

    useEffect(() => {
        if (!user && !token) {
            navigate(AppRoutes.Login);
        };
    }, [user]);

    return (
        <Fragment>
            <Outlet />
            <TContainer />
        </Fragment>
    );
};