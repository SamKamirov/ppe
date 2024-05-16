import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../../const"

export const HandbookTitles = () => {
    return (
        <Fragment>
            <ul className="list-group rounded-0 border-end-0">
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Root} className='link-underline-opacity-0'>СИЗ</Link>
                </li>
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Using} className='link-underline-opacity-0'>Обоснование использования СИЗ</Link>
                </li>
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Periods} className='link-underline-opacity-0'>Периодичность</Link>
                </li>
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.Ranges} className='link-underline-opacity-0'>Диапазоны роста</Link>
                </li>
            </ul>
        </Fragment>
    )
}