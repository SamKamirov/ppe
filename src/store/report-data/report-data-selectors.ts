import { createSelector } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { State } from "../../types/state";

const selectSizes = (state: State) => state[SliceNames.ReportData].sizesReport;

export const getSizesReport = createSelector(
    [selectSizes],
    (sizes) => sizes
);