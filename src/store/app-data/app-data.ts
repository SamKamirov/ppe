import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { deletePPEAction, fetchPPEAction, fetchPPEsAction, fetchSertificates, setModalType, uploadPPEAction } from "../../api/api-actions";
import { ContentTypes } from "../../components/modals/source/const";
import { Nullable } from "vitest";
import { PPE, Sertificate} from "../../types/ppe";

type AppDataInitialState = {
    ppes: Nullable<PPE[]>;
    selectedPPE: Nullable<PPE>;
    isLoading: boolean;
    modalType: ContentTypes;
    error: Nullable<string>;
    sertificates: Nullable<Sertificate[]>
};

const initialState: AppDataInitialState = {
    ppes: null,
    selectedPPE: null,
    isLoading: false,
    modalType: ContentTypes.UNKNOWN,
    error: null,
    sertificates: null
};

const appData = createSlice({
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
        .addCase(fetchSertificates.fulfilled, (state, action) => {
            state.sertificates = action.payload;
        })
    },    
});

const {reducer} = appData;
export default reducer;