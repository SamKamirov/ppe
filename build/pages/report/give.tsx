import React, { Fragment } from 'react';

export const Give = () => {
    return (
        <Fragment>
            <table className='table table-striped'>
                <thead className="content-headers">
                    <tr>
                        <th scope="col">Наименование</th>
                        <th scope="col">Код</th>
                        <th scope="col">Наименование полное</th>
                        <th scope="col">Единица измерения</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>

                </tbody>
            </table>
        </Fragment>
    );
};
