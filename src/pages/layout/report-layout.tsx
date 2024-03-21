import React from 'react';
import {RootLayout} from './layout';
import {Outlet, Route, Routes} from 'react-router-dom';
import {RuleCheck} from '../report/rule-check';
import {Sizes} from '../report/sizes';
import {Give} from '../report/give';
import {AppRoutes} from '../../../const';

export const ReportLayout = () => {
    return <Outlet />;
};
