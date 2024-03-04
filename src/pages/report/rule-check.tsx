import React, {Fragment, ReactNode} from 'react';
import {Reports} from '../../components/reports';
import {ReportButtons} from '../../components/report-buttons';

export const RuleCheck = (): ReactNode => (
    <Fragment>
        <h1>Проверка норм</h1>
        <ReportButtons />
    </Fragment>
);
