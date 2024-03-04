import React from 'react';
import {RangesHeaders} from '../../components/ranges-headers';

export const Ranges = () => {
    return (
        <section className='using'>
            <h1>Диапазоны роста</h1>
            <table className='table'>
                <RangesHeaders />
                <tbody></tbody>
            </table>
        </section>
    );
};
