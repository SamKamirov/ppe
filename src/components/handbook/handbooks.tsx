import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../../const"

export const Handbooks = () => {
    return (
        <Fragment>
            <ul className="row list-unstyled list-group rounded-0">
                <li className="list-group-item">
                    <Link to={AppRoutes.Root}>Справочник «СИЗ»</Link>
                </li>
                <li className="list-group-item">
                    <Link to={AppRoutes.Using}>Справочник «Обоснование использования СИЗ»</Link>
                </li>
                <li className="list-group-item">
                    <Link to={AppRoutes.Periods}>Справочник «Периодичность»</Link>
                </li>
                <li className="list-group-item">
                    <Link to={AppRoutes.Ranges}>Справочник «Диапазоны роста»</Link>
                </li>
            </ul>
        </Fragment>
    )
}