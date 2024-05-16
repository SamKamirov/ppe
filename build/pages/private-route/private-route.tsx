import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes, AuthorizationStatus } from "../../../const";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { User } from "../../types/state";

type Props = {
    children: ReactNode;
    user: User;
};

export const PrivateRoute: FC<Props> = ({ children, user }) => {
    if (!user && user === null) {
        return <Navigate to={AppRoutes.Login} />
    };

    return children;
};