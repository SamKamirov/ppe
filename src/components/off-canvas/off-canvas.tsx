import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../const";

export const OffCanvas = () => {
    return (
        <section className="side-menu-wrapper">
            <div className="side-menu">
                <div className="side-menu-header d-flex justify-content-end p-3">
                    <button className="btn-close"></button>
                </div>
                <div className="side-menu-body">
                    <ul className="site-nav-wrap">
                        <li className="active">
                            <Link to={AppRoutes.Profile} className="nav-link">Профиль</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}