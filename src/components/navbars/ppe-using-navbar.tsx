import { setModalType } from "../../api/api-actions";
import { useAppDispatch } from "../../app/hooks";
import { ContentTypes } from "../modals/source/const";
import React from "react";

export const PPEUsingNavbar = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(setModalType(ContentTypes.AddPPEUsing));

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="mx-0 px-0 container-fluid">
                        <div className="mx-0 ps-2 pe-2 d-flex flex-row justify-content-between gap-2" id="navbarSupportedContent">
                            <ul className="nav d-flex gap-2">
                                <li className="nav-item">
                                    <button className="btn btn-primary" aria-current="page" onClick={handleClick}>Добавить</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}