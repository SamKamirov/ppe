import React, { useEffect, useRef } from 'react';
import { RuleCheckHeaders } from '../../components/report/rule-check-headers';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPPEAction, fetchRulesReport } from '../../api/api-actions';
import { getRulesReport } from '../../store/report-data/report-data-selectors';
import { HandbookEmpty } from '../handbook/handbook-empty';
import { TableRow } from '../../components/table-row/table-row-layout';
import { TableRowTypes } from '../../components/table-row/source';
import { Navbar } from '../../components/navbars/navbar';
import { NavbarTypes } from '../../components/navbars/source';

export const RuleCheck = () => {
    const dispatch = useAppDispatch()
    const ref = useRef(null);

    useEffect(() => {
        dispatch(fetchRulesReport());
    }, [dispatch]);

    const rules = useAppSelector(getRulesReport);
    if (!rules) {
        return <HandbookEmpty />
    }

    return (
        <section>
            <h1 className='mx-2 my-2'>Проверка норм должностей</h1>
            <Navbar type={NavbarTypes.RuleCheck} tableRef={ref} />
            <table className='table table-striped' ref={ref}>
                <RuleCheckHeaders />
                <tbody className='table-group-divider'>
                    {rules.map((rule) => <TableRow type={TableRowTypes.RuleReport} rule={rule} key={rule.firstName} />)}
                </tbody>
            </table>
        </section>
    );
}
