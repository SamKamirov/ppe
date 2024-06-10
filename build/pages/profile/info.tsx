import React from "react";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../const";

export const Info = () => {
    const user = useAppSelector(getUser);

    const { username } = user;

    if (!user) {
        return <Navigate to={AppRoutes.Login} />;
    };

    return (
        <div>
            <h1>Информация о пользователе</h1>
            <div>
                <h2>Имя пользователя: {username}</h2>
            </div>
        </div>
    );
};