import React, { Fragment, ReactNode } from 'react';
import { RuleCheckHeaders } from '../../components/report/rule-check-headers';

export const RuleCheck = (): ReactNode => (
    <div className='col px-0'>
        <h1>Проверка норм должностей</h1>
        <table className='table table-striped'>
            <RuleCheckHeaders />
        </table>
    </div>
);
