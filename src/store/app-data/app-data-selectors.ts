import { $CombinedState, createSelector } from "@reduxjs/toolkit";
import { State } from "../../types/state";
import { SliceNames } from "../../../const";

const selectPPEs = (state: State) => state[SliceNames.AppData].ppes;
const selectModalType = (state: State) => state[SliceNames.AppData].modalType;
const selectLoadingState = (state: State) => state[SliceNames.AppData].isLoading;
const selectSertificates = (state: State) => state[SliceNames.AppData].sertificates;

export const getPPES = createSelector(
    [selectPPEs],
    (ppes) => ppes
)

export const getSelectedPPE = createSelector(
    (state: State) => state[SliceNames.AppData].selectedPPE,
    (selectedPPE) => selectedPPE
)

export const getModalContentType = createSelector(
    [selectModalType],
    (selectedModalType) => selectedModalType
)

export const getLoadingState = createSelector(
    [selectLoadingState],
    (isLoading) => isLoading
)

export const getSertificates = createSelector(
    [selectSertificates],
    (acts) => acts
)