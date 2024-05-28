import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { User } from "../../types/state";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { Loading } from "../../components/loading/loading";

type Props = {
    children: ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
    const user = useAppSelector(getUser);

    if (!user) {
        return <Loading />;
    };

    return (
        user ? children : <Navigate to={AppRoutes.Login} />
    );
};