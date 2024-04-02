import React from 'react';
import { RangesHeaders } from '../../components/ranges/ranges-headers';
import { useAppSelector } from '../../app/hooks';
import { ranges } from '../../mocks/ranges';
import { RangesTableRow } from '../../components/ranges/ranges-table-row';

export const Ranges = () => {
    const ppesRanges = useAppSelector((state) => state)
    return (
        <section className='using'>
            <h1>Диапазоны роста</h1>
            <table className='table'>
                <table className="table">
                    <table className='table table-striped'>
                        <RangesHeaders />
                        <tbody className='table-group-divider'>
                            {ranges.map((range) => (
                                <RangesTableRow range={range} key={range.fullTitle} />
                            ))}
                        </tbody>
                    </table>
                </table>
            </table>
        </section>
    );
};
