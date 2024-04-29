import React, { useEffect } from 'react';
import { RuleCheckHeaders } from '../../components/report/rule-check-headers';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPPEAction, fetchRulesReport } from '../../api/api-actions';
import { getRulesReport } from '../../store/report-data/report-data-selectors';
import { HandbookEmpty } from '../handbook/handbook-empty';
import { TableRow } from '../../components/table-row/table-row-layout';
import { TableRowTypes } from '../../components/table-row/source';

export const RuleCheck = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchRulesReport());
    }, [dispatch]);

    const rules = useAppSelector(getRulesReport);
    if (!rules) {
        return <HandbookEmpty />
    }

    return (
        <div className='col px-0'>
            <h1>Проверка норм должностей</h1>
            <table className='table table-striped'>
                <RuleCheckHeaders />
                <tbody>
                    {rules.map((rule) => <TableRow type={TableRowTypes.RuleReport} rule={rule} key={rule.firstName} />)}
                </tbody>
            </table>
        </div>
    );
}
