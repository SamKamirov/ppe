import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";

export const Services = () => {
    return (
        <Fragment>
            <ul className="row list-unstyled list-group rounded-0">
                <li className="list-group-item border-start-0 border-end-0">
                    <Link to={AppRoutes.SetRules}>Установка норм СИЗ</Link>
                </li>
            </ul>
        </Fragment>
    )
}