import { createSelector } from "@reduxjs/toolkit";
import { State } from "../types/state";

export const getPpes = createSelector(
    (state: State) => state.ppes,
    (ppe) => ppe
)

export const getSelectedPpe = createSelector(
    (state: State) => state.selectedPpe,
    (selectedPpe) => selectedPpe
)