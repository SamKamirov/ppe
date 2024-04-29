import React, { forwardRef, MutableRefObject, useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setModalType } from "../../api/api-actions";
import { ContentTypes } from "../modals/source/const";
import { saveToFile } from "./source";

export const PPENavbar = forwardRef((_, ref) => {
    const currentRef = ref as MutableRefObject<HTMLTableElement>;
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(setModalType(ContentTypes.AddPPE));
    const handleReportClick = () => saveToFile({ currentRef, title: '' });

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="mx-0 px-0 container-fluid">
                <div className="mx-0 ps-2 pe-2 d-flex flex-row justify-content-between gap-2" id="navbarSupportedContent">
                    <ul className="nav d-flex gap-2">
                        <li className="nav-item">
                            <button className="btn btn-primary" aria-current="page" onClick={handleClick}>Добавить</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" aria-current="page" onClick={handleReportClick}>Выгрузить отчёт</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
})