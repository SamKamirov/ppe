import React, { Fragment } from "react";
import { UsingHeaders } from "../../components/using-headers";

export const Using = () => {
    return (
        <Fragment>
            <section className="using">
                <h1>Использование</h1>
                <table className="table">
                    <UsingHeaders/>
                    <tbody></tbody>
                </table>
            </section>
        </Fragment>
    )
}