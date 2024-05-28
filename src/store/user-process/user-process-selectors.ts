import { createSelector } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { State } from "../../types/state";

const selectUser = (state: State) => state[SliceNames.UserProcess].user;
const selectAuthStatus = (state: State) => state[SliceNames.UserProcess].authStatus;
const selectMenuOpenStatus = (state: State) => state[SliceNames.UserProcess].menuOpened;

const getUser = createSelector(
    [selectUser],
    (user) => user
);

const getAuthStatus = createSelector(
    [selectAuthStatus],
    (authStatus) => authStatus
);

const getMenuStatus = createSelector([selectMenuOpenStatus], (status) => status);

export {getUser, getAuthStatus, getMenuStatus};