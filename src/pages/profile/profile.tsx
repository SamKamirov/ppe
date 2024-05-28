import React, { useEffect } from "react"
import { Header } from "../../components/header/header"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { getLoadingState } from "../../store/app-data/app-data-selectors";
import { Loading } from "../../components/loading/loading";
import { setMenuOpened } from "../../store/user-process/user-process-api-actions";
import browserHistory from "../../browser-history";
import { AppRoutes } from "../../../const";

export const Profile = () => {
    const user = useAppSelector(getUser);
    const isLoading = useAppSelector(getLoadingState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setMenuOpened(false));
    }, [dispatch]);

    if (isLoading || !user) {
        return <Loading />
    };

    return (
        <section>
            <div>
                <h1>Пользователь</h1>
                <h2>{user.username}</h2>
            </div>
        </section>
    )
};