import { createSelector } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { State } from "../../types/state";

const selectUser = (state: State) => state[SliceNames.UserProcess].user;
const selectAuthStatus = (state: State) => state[SliceNames.UserProcess].authStatus;

const getUser = createSelector(
    [selectUser],
    (user) => user
);

const getAuthStatus = createSelector(
    [selectAuthStatus],
    (authStatus) => authStatus
)

export {getUser, getAuthStatus};