import { createReducer } from "@reduxjs/toolkit";
import { ppes } from "../mocks/ppe";
import { selectPPE } from "./action";
import { TInitialState } from "../types/state";

const initialState: TInitialState = {
    ppe: null,
    ppes: ppes
};

export const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(selectPPE, (state, action) => {
        state.ppe = action.payload.ppe
    })
})