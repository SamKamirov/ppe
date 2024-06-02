import React, { FC, ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { User } from "../../types/state";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { Loading } from "../../components/loading/loading";
import { getLoadingState } from "../../store/app-data/app-data-selectors";

type Props = {
    children: ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
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
        user ? children : <Navigate to={AppRoutes.Login} />
    );
};