import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { PPE } from "../../types/ppe";
import { fetchPPEAction, fetchPPEsAction, uploadPPEAction } from "../../api/api-actions";
import { ppes } from "../../mocks/ppe";
import { TInitialState } from "../../types/state";

const initialState: TInitialState = {
    ppes: null,
    selectedPPE: null
}

export const AppData = createSlice({
    name: SliceNames.AppData,
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(uploadPPEAction.fulfilled, (state) => {
            console.log('fulfilled')
        })
        .addCase(uploadPPEAction.rejected, (state) => {
            console.log('rejected')
        })
        .addCase(fetchPPEAction.fulfilled, (state, action) => {
            state.selectedPPE = action.payload;
        })
        .addCase(fetchPPEsAction.fulfilled, (state, action) => {
            state.ppes = action.payload;
        })
    },    
})