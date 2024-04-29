import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { deletePPEAction, fetchHeightRanges, fetchPPEAction, fetchPPEsAction, fetchSertificates, setModalType, uploadPPEAction, uploadSertificate } from "../../api/api-actions";
import { ContentTypes } from "../../components/modals/source/const";
import { Nullable } from "vitest";
import { HeightRanges, PPE, Sertificate} from "../../types/ppe";

type AppDataInitialState = {
    ppes: Nullable<PPE[]>;
    selectedPPE: Nullable<PPE>;
    isLoading: boolean;
    modalType: ContentTypes;
    sertificates: Nullable<Sertificate[]>;
    heightRanges: Nullable<HeightRanges[]>
};

const initialState: AppDataInitialState = {
    ppes: null,
    selectedPPE: null,
    isLoading: false,
    modalType: ContentTypes.UNKNOWN,
    sertificates: null,
    heightRanges: null
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
        .addCase(fetchSertificates.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSertificates.fulfilled, (state, action) => {
            state.isLoading = false;
            state.sertificates = action.payload;
        })
        .addCase(fetchSertificates.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchHeightRanges.fulfilled, (state, action) => {
            state.heightRanges = action.payload;
        })
    },    
});

const {reducer} = appData;
export default reducer;