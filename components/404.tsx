import React, { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";

export const NotFound = ():ReactNode => (
    <Fragment>
        Not found
        <Link to='/'>Back to main</Link>
    </Fragment>
)