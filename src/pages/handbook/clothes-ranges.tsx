import React, { useEffect } from 'react';
import { RangesHeaders } from '../../components/ranges/ranges-headers';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { ranges } from '../../mocks/ranges';
import { RangesTableRow } from '../../components/ranges/ranges-table-row';
import { fetchPPEAction, fetchSizeRanges } from '../../api/api-actions';
import { getSizeRanges } from '../../store/app-data/app-data-selectors';
import { HandbookEmpty } from './handbook-empty';

export const Ranges = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPPEAction(null));
        dispatch(fetchSizeRanges());
    }, [dispatch]);

    const ranges = useAppSelector(getSizeRanges);

    if (!ranges) {
        return <HandbookEmpty />
    }

    return (
        <section className='using'>
            <h1 className='mx-2 my-2'>Диапазоны роста</h1>
            <table className='table table-striped'>
                <RangesHeaders />
                <tbody className='table-group-divider'>
                    {ranges.map((range) => (
                        <RangesTableRow range={range} key={range.id} />
                    ))}
                </tbody>
            </table>
        </section>
    );
};
