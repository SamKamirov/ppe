import { $CombinedState, createSelector } from "@reduxjs/toolkit";
import { State } from "../../types/state";
import { SliceNames } from "../../../const";

const selectPPEs = (state: State) => state[SliceNames.AppData].ppes;
const selectModalType = (state: State) => state[SliceNames.AppData].modalType;
const selectLoadingState = (state: State) => state[SliceNames.AppData].isLoading;
const selectSertificates = (state: State) => state[SliceNames.AppData].sertificates;
const selectHeightRanges = (state: State) => state[SliceNames.AppData].heightRanges;
const selectEmployees = (state: State) => state[SliceNames.AppData].employees;
const selectPeriods = (state: State) => state[SliceNames.AppData].periods;
const selectSortType = (state: State) => state[SliceNames.AppData].sortingType;
const selectSizeType = (state: State) => state[SliceNames.AppData].sizeTypes;

export const getPPES = createSelector(
    [selectPPEs],
    (ppes) => ppes
);

export const getSelectedPPE = createSelector(
    (state: State) => state[SliceNames.AppData].selectedPPE,
    (selectedPPE) => selectedPPE
);

export const getModalContentType = createSelector(
    [selectModalType],
    (selectedModalType) => selectedModalType
);

export const getLoadingState = createSelector(
    [selectLoadingState],
    (isLoading) => isLoading
);

export const getSertificates = createSelector(
    [selectSertificates],
    (acts) => acts
);

export const getHeightRanges = createSelector(
    [selectHeightRanges],
    (heightRanges) => heightRanges
);

export const getEmployees = createSelector(
    [selectEmployees],
    (employees) => employees
);

export const getPeriods = createSelector(
    [selectPeriods],
    (periods) => periods
);

export const getSortType = createSelector(
    [selectSortType],
    (type) => type
);

export const getSizeTypes = createSelector(
    [selectSizeType],
    (sizeTypes) => sizeTypes
);