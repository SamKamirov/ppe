import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { setModalType } from "../../api/api-actions";
import { ContentTypes } from "../modals/source/const";

export const EmployeeNavbar = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setModalType(ContentTypes.AddEmployee));
        console.log('slkgfdflkgj')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="mx-0 px-0 container-fluid">
                <div className="mx-0 ps-2 pe-2 d-flex flex-row justify-content-between gap-2" id="navbarSupportedContent">
                    <ul className="nav d-flex gap-2">
                        <li className="nav-item">
                            <button className="btn btn-primary" aria-current="page" onClick={handleClick}>Добавить</button>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Сортировка
                                </button>
                                <ul className="dropdown-menu">
                                    {/* {PPESortingElements.map((sorting) => <SortComponent sorting={sorting} key={sorting.type} />)} */}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}