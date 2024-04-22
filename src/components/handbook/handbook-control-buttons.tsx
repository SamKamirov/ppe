import React from "react"
import { ContentTypes } from "../modals/source/const";
import { setModalType } from "../../api/api-actions";
import { useAppDispatch } from "../../app/hooks";

export const ControlButtons = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setModalType(ContentTypes.AddPPE));
    }
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="mx-0 px-0 container-fluid">
                        <div className="mx-0 ps-2 pe-2 d-flex flex-row justify-content-between gap-2" id="navbarSupportedContent">
                            <ul className="nav">
                                <li className="nav-item">
                                    <button className="btn btn-primary" aria-current="page" onClick={handleClick}>Добавить</button>
                                </li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}