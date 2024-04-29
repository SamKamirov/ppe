import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import appData from './app-data/app-data';
import reportData from './report-data/report-data'
import serviceData from './service-data/service-data';

const rootReducer = combineReducers({
    [SliceNames.AppData]: appData,
    [SliceNames.ReportData]: reportData,
    [SliceNames.ServiceData]: serviceData
});

export default rootReducer;

