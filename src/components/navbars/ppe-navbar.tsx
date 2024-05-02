import React, { ChangeEvent, FC, forwardRef, MutableRefObject, useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setModalType, setSorting } from "../../api/api-actions";
import { ContentTypes } from "../modals/source/const";
import { PPESortingElement, PPESortingElements, saveToFile } from "./source";
import { SortTypes } from "../../../const";

type Props = {
    sorting: PPESortingElement;
}

const SortComponent: FC<Props> = ({ sorting }) => {
    const dispatch = useAppDispatch();

    const handleClick = () => dispatch(setSorting(sorting.type));
    return (
        <li>
            <label htmlFor={sorting.type} className="dropdown-item" onClick={handleClick}>{sorting.title}</label>
            <input className="hidden" type="radio" name={sorting.type} />
        </li>
    )
}

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
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Сортировка
                                </button>
                                <ul className="dropdown-menu">
                                    {PPESortingElements.map((sorting) => <SortComponent sorting={sorting} key={sorting.type} />)}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
})