import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { getLoadingState, getModalContentType } from "../../store/app-data/app-data-selectors";
import { Loading } from "../../components/loading/loading";
import { setMenuOpened } from "../../store/user-process/user-process-api-actions";
import { ProfileSideBar } from "./source/profile-sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AppRoutes } from "../../../const";
import { isModal } from "../handbook/source";
import { ModalLayout } from "../../components/modals/modal-layout";

export const Profile = () => {
    const user = useAppSelector(getUser);
    const isLoading = useAppSelector(getLoadingState);
    const dispatch = useAppDispatch();
    const modalContentType = useAppSelector(getModalContentType);

    useEffect(() => {
        dispatch(setMenuOpened(false));
    }, [dispatch]);

    if (isLoading) {
        return <Loading />
    };

    if (!user) {
        return <Navigate to={AppRoutes.Root + AppRoutes.Login} />;
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
            {isModal(modalContentType) && <ModalLayout contentType={modalContentType} />}
        </section>
    )
};