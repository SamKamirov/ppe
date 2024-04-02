import React, { FC } from 'react';
import { RootLayout } from './layout';
import { Outlet, Route, Routes } from 'react-router-dom';
import { RuleCheck } from '../report/rule-check';
import { Sizes } from '../report/sizes';
import { Give } from '../report/give';
import { AppRoutes } from '../../../const';
import { RouteChildren } from '../../types/utils';

export const ReportLayout: FC<RouteChildren> = ({ children }) => (
    <RootLayout>
        {children}
    </RootLayout>);
