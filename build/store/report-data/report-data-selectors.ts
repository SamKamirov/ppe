import { createSelector } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { State } from "../../types/state";

const selectSizes = (state: State) => state[SliceNames.ReportData].sizes;
const selectRules = (state: State) => state[SliceNames.ReportData].rules;

export const getSizesReport = createSelector(
    [selectSizes],
    (sizes) => sizes
);

export const getRulesReport = createSelector(
    [selectRules],
    (rules) => rules
)