import { createSelector } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { State } from "../../types/state";

const selectUser = (state: State) => state[SliceNames.UserProcess].user;

const getUser = createSelector(
    [selectUser],
    (user) => user
);

export {getUser};