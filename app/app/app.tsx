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
    <Routes>
        <Route
            path={AppRoutes.Root}
            element={
                <RootLayout>
                    <Handbook />
                </RootLayout>}>
        </Route>
        <Route
            path={AppRoutes.Using}
            element={
                <RootLayout>
                    <Using />
                </RootLayout>} />
        <Route
            path={AppRoutes.Periods}
            element={
                <RootLayout>
                    <Periods />
                </RootLayout>} />
        <Route
            path={AppRoutes.Ranges}
            element={
                <RootLayout>
                    <Ranges />
                </RootLayout>} />
        <Route
            path={AppRoutes.RuleCheck}
            element={
                <ReportLayout>
                    <RuleCheck />
                </ReportLayout>
            } />
        <Route
            path={AppRoutes.Sizes}
            element={
                <ReportLayout>
                    <Sizes />
                </ReportLayout>
            } />
        <Route
            path={AppRoutes.Give}
            element={
                <ReportLayout>
                    <Give />
                </ReportLayout>
            } />
        <Route />
        <Route path={AppRoutes.SetRules} element={
            <RootLayout>
                <SetRule />
            </RootLayout>
        } />
        <Route path={AppRoutes.PersonCard} element={
            <RootLayout>
                <Tools />
            </RootLayout>
        } />
        <Route path={AppRoutes.Everything} element={<NotFound />} />
    </Routes>
);
