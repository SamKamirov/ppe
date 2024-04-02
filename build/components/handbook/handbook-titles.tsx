import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../../const"

export const HandbookTitles = () => {
    return (
        <Fragment>
            <ul className="row list-unstyled list-group rounded-0">
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Root}>Справочник «СИЗ»</Link>
                </li>
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Using}>Справочник «Обоснование использования СИЗ»</Link>
                </li>
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Periods}>Справочник «Периодичность»</Link>
                </li>
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Ranges}>Справочник «Диапазоны роста»</Link>
                </li>
            </ul>
        </Fragment>
    )
}