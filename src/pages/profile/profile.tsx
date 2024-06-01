import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { getLoadingState } from "../../store/app-data/app-data-selectors";
import { Loading } from "../../components/loading/loading";
import { setMenuOpened } from "../../store/user-process/user-process-api-actions";
import { ProfileSideBar } from "./source/profile-sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";

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
        <section className="layout">
            <Header />
            <section className="row full-height">
                <ProfileSideBar />
                <div className='col px-0 d-flex flex-column justify-content-between'>
                    <Outlet />
                </div>
            </section>
        </section>
    )
};