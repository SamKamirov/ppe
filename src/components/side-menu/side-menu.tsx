import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { useAppDispatch } from "../../app/hooks";
import { setMenuOpened } from "../../store/user-process/user-process-api-actions";

export const SideMenu = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(setMenuOpened(false));

    return (
        <section className="side-menu-wrapper">
            <div className="side-menu">
                <div className="side-menu-header d-flex justify-content-end p-3">
                    <button className="btn btn-close btn-lg" onClick={handleClick}></button>
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