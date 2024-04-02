import React, { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";

export const NotFound = (): ReactNode => (
    <Fragment>
        Not found
        <Link to={AppRoutes.Root}>Back to main</Link>
    </Fragment>
)