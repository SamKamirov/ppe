import React, { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";
import '../../public/css/404.scss';

export const NotFound = (): ReactNode => (
    <article className="not-found">
        <div className="not-found-wrapper">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-error">Страница не найдена</h2>
            <Link to={AppRoutes.Root} className="back-to-main">На главную</Link>
        </div>
    </article>
)