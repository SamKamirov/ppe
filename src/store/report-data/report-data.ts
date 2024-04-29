import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { fetchSizesReport } from "../../api/api-actions";
import { Employee } from "../../types/ppe";

export type SizesReport = Omit<Employee, 'id'>

type InitialState  = {
    sizesReport: Nullable<SizesReport[]>
};

const initialState: InitialState = {
    sizesReport: null
};

const reportData = createSlice({
    name: SliceNames.ReportData,
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchSizesReport.fulfilled, (state, action) => {
            state.sizesReport = action.payload;
        })
    },
});

const {reducer} = reportData;
export default reducer;