import React, { ReactNode } from "react"

export const HandbookHeaders = (): ReactNode => {
    return (
        <thead className="content-headers">
            <tr>
                <th scope="col">Наименование</th>
                <th scope="col">Код</th>
                <th scope="col">Наименование полное</th>
                <th scope="col">Единица измерения</th>
            </tr>
        </thead>
    )
}