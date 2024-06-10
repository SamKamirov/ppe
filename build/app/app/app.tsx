import React from "react";
import { Route, Routes } from "react-router-dom";
import { Handbook } from "../../pages/handbook/handbook";
import { RuleCheck } from "../../pages/report/rule-check";
import { NotFound } from "../../components/404";
import { SetRule } from "../../pages/service/set-rule";
import { AppRoutes } from "../../../const";
import { Using } from "../../pages/handbook/using";
import { Periods } from "../../pages/handbook/periods";
import { Ranges } from "../../pages/handbook/clothes-ranges";
import { Sizes } from "../../pages/report/sizes";
import { Give } from "../../pages/report/give";
import { Tools } from "../../pages/tools/tools";
import { Login } from "../../components/login/login";
import { Profile } from "../../pages/profile/profile";
import { Main } from "../../pages/main/main";
import { PrivateRoute } from "../../pages/private-route/private-route";
import { Info } from "../../pages/profile/info";
import { Employee } from "../../employee/employee";

export const App = () => (
  <Routes>
    <Route element={<PrivateRoute />}>
      <Route index element={<Handbook />} />
      <Route path={AppRoutes.Using} element={<Using />} />
      <Route path={AppRoutes.Periods} element={<Periods />} />
      <Route path={AppRoutes.Ranges} element={<Ranges />} />
      <Route path={AppRoutes.RuleCheck} element={<RuleCheck />} />
      <Route path={AppRoutes.Sizes} element={<Sizes />} />
      <Route path={AppRoutes.Give} element={<Give />} />
      <Route path={AppRoutes.SetRules} element={<SetRule />} />
      <Route path={AppRoutes.PersonCard} element={<Tools />} />
    </Route>
    <Route path={AppRoutes.Profile} element={<Profile />}>
      <Route path={AppRoutes.Info} element={<Info />} />
      <Route path={AppRoutes.Employee} element={<Employee />} />
    </Route>
    <Route path={AppRoutes.Everything} element={<NotFound />} />
    <Route path={AppRoutes.Login} element={<Login />} />
  </Routes>
);
