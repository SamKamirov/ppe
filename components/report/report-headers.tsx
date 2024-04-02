import React, { ReactNode } from "react";

export const ReportHeaders = (): ReactNode => {
    return (
        <thead className="content-headers">
            <tr>
                <th className="headers__item">Наименование</th>
                <th className="headers__item">Код</th>
                <th className="headers__item">Наименование полное</th>
                <th className="headers__item">Единица измерения</th>
            </tr>
        </thead>
    )
}