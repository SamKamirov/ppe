import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";
import { Handbooks } from "./handbook/handbooks";
import { Reports } from "./reports";
import { Services } from "./services";

export const SideBar = () => {
    return (
        <nav className="col sidebar">
            <ul className="list-unstyled menu">
                <li className="list-group-item">
                    <h4 className="fs-4">Справочник</h4>
                    <Handbooks/>
                </li>
                <li className="list-group-item">
                    <h4 className="fs-4">Отчёт</h4>
                    <Reports />
                </li>
                <li className="list-group-item">
                    <h4 className="fs-4">Сервис</h4>
                    <Services/>
                </li>
                <li className="list-group-item">
                    <h4 className="fs-4">Инструменты</h4>
                </li>
            </ul>
        </nav>
    )
}