import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { useAppDispatch } from "../../app/hooks";
import { logoutAction, setMenuOpened } from "../../store/user-process/user-process-api-actions";

export const SideMenu = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(setMenuOpened(false));
    const handleLogout = () => dispatch(logoutAction());

    return (
        <section className="side-menu-wrapper">
            <div className="side-menu">
                <div className="side-menu-header d-flex justify-content-end p-3">
                    <button className="btn btn-close btn-lg" onClick={handleClick}></button>
                </div>
                <div className="side-menu-body">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-action border-0 p-0 subsection-item">
                            <Link to={AppRoutes.Root + AppRoutes.Profile} className="nav-link m-0 p-2 px-3 d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                                <p className="p-0 px-1 m-0">Профиль</p>
                            </Link>
                        </li>
                        <li className="list-group-item list-group-item-action border-0 p-0 subsection-item">
                            <button className="logout-btn m-0 p-2 px-3 d-flex align-items-center" onClick={handleLogout}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                                </svg>
                                <p className="p-0 m-0 px-1">Выйти</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}