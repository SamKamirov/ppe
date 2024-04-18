import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import { AppData } from "./app-data/app-data";

export const rootReducer = combineReducers({
    [SliceNames.AppData]: AppData.reducer
})