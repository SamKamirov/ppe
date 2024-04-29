import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { fetchRulesReport, fetchSizesReport } from "../../api/api-actions";
import { Employee, RuleReport } from "../../types/ppe";

export type SizesReport = Omit<Employee, 'id'>

type InitialState  = {
    sizes: Nullable<SizesReport[]>,
    rules: Nullable<RuleReport[]>
};

const initialState: InitialState = {
    sizes: null,
    rules: null
};

const reportData = createSlice({
    name: SliceNames.ReportData,
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchSizesReport.fulfilled, (state, action) => {
            state.sizes = action.payload;
        })
        .addCase(fetchRulesReport.fulfilled, (state, action) => {
            state.rules = action.payload;
        })
    },
});

const {reducer} = reportData;
export default reducer;