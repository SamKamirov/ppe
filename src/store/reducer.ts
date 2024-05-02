import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import appData from './app-data/app-data';
import reportData from './report-data/report-data'
import serviceData from './service-data/service-data';
import userProcess from './user-process/user-process';

const rootReducer = combineReducers({
    [SliceNames.AppData]: appData,
    [SliceNames.ReportData]: reportData,
    [SliceNames.ServiceData]: serviceData,
    [SliceNames.UserProcess]: userProcess
});

export default rootReducer;

