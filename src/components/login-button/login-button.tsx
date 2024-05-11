import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AppRoutes } from "../../../const"
import browserHistory from "../../browser-history";

export const LoginButton = () => {
    const navigate = useNavigate();
    const handleClick = () => browserHistory.push(AppRoutes.Login);

    return (
        <div className="d-flex" role="search">
            <button className="btn btn-outline-success btn-enter" type="button" onClick={handleClick}>Вход</button>
        </div>
    )
}