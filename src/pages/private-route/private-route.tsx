import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";

type Props = {
    children: ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
    const user = useAppSelector(getUser);

    return (
        user ? children : <Navigate to={AppRoutes.Login} />
    );
};