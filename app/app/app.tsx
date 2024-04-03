import React, { FC } from 'react';
import { BrowserRouter, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from '../../pages/layout/layout';
import { Handbook } from '../../pages/handbook/handbook';
import { RuleCheck } from '../../pages/report/rule-check';
import { NotFound } from '../../components/404';
import { SetRule } from '../../pages/service/set-rule';
import { AppRoutes } from '../../../const';
import { Using } from '../../pages/handbook/using';
import { Periods } from '../../pages/handbook/periods';
import { Ranges } from '../../pages/handbook/clothes-ranges';
import { Sizes } from '../../pages/report/sizes';
import { Give } from '../../pages/report/give';
import { ReportLayout } from '../../pages/layout/report-layout';
import { AppProps } from '../../types/ppe';
import { Tools } from '../../pages/tools/tools';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={AppRoutes.Root} element={<RootLayout />}>
                <Route index element={<Handbook />} />
                <Route path='handbook/:id' />
                <Route path={AppRoutes.Using} element={<Using />} />
                <Route path={AppRoutes.Periods} element={<Periods />} />
                <Route path={AppRoutes.Ranges} element={<Ranges />} />
                <Route path={AppRoutes.SetRules} element={<SetRule />} />
                <Route path={AppRoutes.Reports} element={<ReportLayout />}>
                    <Route path={AppRoutes.RuleCheck} element={<RuleCheck />} />
                    <Route path={AppRoutes.Sizes} element={<Sizes />} />
                    <Route path={AppRoutes.Give} element={<Give />} />
                </Route>
                <Route path={AppRoutes.Tools} element={<Tools />} />
            </Route>
            <Route path={AppRoutes.Everything} element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
