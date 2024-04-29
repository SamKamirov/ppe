import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import appData from './app-data/app-data';
import reportData from './report-data/report-data'

const rootReducer = combineReducers({
    [SliceNames.AppData]: appData,
    [SliceNames.ReportData]: reportData
});

export default rootReducer;

