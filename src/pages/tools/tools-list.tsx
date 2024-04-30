import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../../const"

export const ToolsList = () => {
    return (
        <Fragment>
            <ul className="list-group rounded-0">
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.PersonCard} className='subsection-link'>Личная карточка сотрудника</Link>
                </li>
            </ul>
        </Fragment>
    )
}