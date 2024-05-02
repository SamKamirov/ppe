import React from "react";
import { AppRoutes } from "../../../const";

export const Header = () => {
    return (
        <header className="row logo d-flex">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={AppRoutes.Root}>
                        <img src="../logo.ico" alt="Logo" width="45" height="45" className="mx-2" />
                    </a>
                    <div className="d-flex" role="search">
                        <button className="btn btn-outline-success btn-enter" type="button">Вход</button>
                    </div>
                </div>
            </nav>
        </header>
    )
};