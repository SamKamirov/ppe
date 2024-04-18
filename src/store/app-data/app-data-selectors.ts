import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../types/state";
import { SliceNames } from "../../../const";

const selectPPEs = (state: State) => state[SliceNames.AppData].ppes;

export const getPPES = createSelector(
    [selectPPEs],
    (ppes) => ppes
)

export const getSelectedPPE = createSelector(
    (state: State) => state[SliceNames.AppData].selectedPPE,
    (selectedPPE) => selectedPPE
)