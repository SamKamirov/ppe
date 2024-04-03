import React, { Fragment } from "react";
import { UsingHeaders } from "../../components/using-headers";

export const Using = () => {
    return (
        <div className="col px-0">
            <section className="using">
                <h1>Использование</h1>
                <table className="table">
                    <UsingHeaders />
                    <tbody></tbody>
                </table>
            </section>
        </div>
    )
}