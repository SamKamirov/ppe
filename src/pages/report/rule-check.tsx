import React, { useEffect } from 'react';
import { RuleCheckHeaders } from '../../components/report/rule-check-headers';
import { useAppDispatch } from '../../app/hooks';
import { fetchPPEAction } from '../../api/api-actions';

export const RuleCheck = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPPEAction(null));
    }, [dispatch]);

    return (
        <div className='col px-0'>
            <h1>Проверка норм должностей</h1>
            <table className='table table-striped'>
                <RuleCheckHeaders />
                <tbody>

                </tbody>
            </table>
        </div>
    );
}
