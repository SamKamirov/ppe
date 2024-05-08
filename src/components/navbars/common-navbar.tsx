import React, { forwardRef, MutableRefObject, Ref } from "react";
import { NavbarTypes, saveToFile } from "./source";

type Props = {
    type?: NavbarTypes;
}

type forwardRefProps = {
    _ref: Ref<HTMLTableElement>;
    type?: NavbarTypes;
}

const getReportTitle = ({ type }: Props) => {
    switch (type) {
        case NavbarTypes.SizesReport: return 'Размеры';
        case NavbarTypes.RuleCheck: return 'Проверка норм должностей'
    }
}


export const CommonNavbar = forwardRef(({ type }: Props, ref) => {
    const currentRef = ref as MutableRefObject<HTMLTableElement>;
    const handleReportClick = () => {
        const reportTitle = getReportTitle({ type });
        saveToFile({ currentRef, title: `Отчёт "${reportTitle}" на ${new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' })}` });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="mx-0 px-0 container-fluid">
                <div className="mx-0 ps-2 pe-2 d-flex flex-row justify-content-between gap-2" id="navbarSupportedContent">
                    <ul className="nav d-flex gap-2">
                        <li className="nav-item">
                            <button className="btn btn-primary" aria-current="page" onClick={handleReportClick}>Выгрузить отчёт</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
})