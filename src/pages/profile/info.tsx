import React from "react";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";

export const Info = () => {
    const user = useAppSelector(getUser);

    const { username } = user;

    return (
        <div>
            <h1>Информация о пользователе</h1>
            <div>
                <h2>Имя пользователя: {username}</h2>
            </div>
        </div>
    );
};