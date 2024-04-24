import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { deletePPEAction, fetchActsAction, fetchPPEAction, fetchPPEsAction, setModalType, uploadPPEAction } from "../../api/api-actions";
import { TInitialState } from "../../types/state";
import { ContentTypes } from "../../components/modals/source/const";

const initialState: TInitialState = {
    ppes: null,
    selectedPPE: null,
    isLoading: false,
    modalType: ContentTypes.UNKNOWN,
    error: null,
    acts: null
}

export const AppData = createSlice({
    name: SliceNames.AppData,
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(uploadPPEAction.fulfilled, (state) => {
            state.isLoading = false;
            state.modalType = ContentTypes.UNKNOWN;
        })
        .addCase(uploadPPEAction.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchPPEAction.fulfilled, (state, action) => {
            state.selectedPPE = action.payload;
        })
        .addCase(fetchPPEsAction.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchPPEsAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ppes = action.payload;
        })
        .addCase(setModalType.fulfilled, (state, action) => {
            state.modalType = action.payload;
        })
        .addCase(deletePPEAction.fulfilled, (state) => {
            state.selectedPPE = null;
            state.modalType = ContentTypes.UNKNOWN;
        })
        .addCase(fetchActsAction.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchActsAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.acts = action.payload;
        })
        .addCase(fetchActsAction.rejected, (state, action) => {
            state.isLoading = false;
        })
    },    
})