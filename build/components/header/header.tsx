import React from "react";
import { AppRoutes } from "../../../const";
import { useAppSelector } from "../../app/hooks";
import { getUser } from "../../store/user-process/user-process-selectors";
import { UserInfo } from "../user-info/user-info";
import { LoginButton } from "../login-button/login-button";

export const Header = () => {
    const user = useAppSelector(getUser);

    return (
        <header className="row logo d-flex">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={AppRoutes.Root}>
                        <img src="../logo.ico" alt="Logo" width="45" height="45" className="mx-2" />
                    </a>
                    {user ? <UserInfo user={user} /> : <LoginButton />}
                </div>
            </nav>
        </header>
    )
};