import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { deletePPEAction, fetchEmployees, fetchHeightRanges, fetchPPEAction, fetchPPEsAction, fetchRulesReport, fetchSertificates, fetchSetRuleAction, setModalType, setRuleAction, uploadPPEAction, uploadSertificate } from "../../api/api-actions";
import { ContentTypes } from "../../components/modals/source/const";
import { Nullable } from "vitest";
import { Employee, HeightRanges, Period, PPE, Rule, RuleReport, Sertificate} from "../../types/ppe";

type AppDataInitialState = {
    ppes: Nullable<PPE[]>;
    selectedPPE: Nullable<PPE>;
    isLoading: boolean;
    modalType: ContentTypes;
    sertificates: Nullable<Sertificate[]>;
    heightRanges: Nullable<HeightRanges[]>;
    employees: Nullable<Employee[]>;
    periods: Nullable<Period[]>;
};

const initialState: AppDataInitialState = {
    ppes: null,
    selectedPPE: null,
    isLoading: false,
    modalType: ContentTypes.UNKNOWN,
    sertificates: null,
    heightRanges: null,
    employees: null,
    periods: null,
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
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            state.employees = action.payload;
        })
        .addCase(fetchSetRuleAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ppes = action.payload.ppes;
            state.periods = action.payload.periods;
            state.employees = action.payload.employees;
            state.sertificates = action.payload.sertificates;
        })
        .addCase(setRuleAction.fulfilled, (state) => {
            state.isLoading = false;
        })
    },    
});

const {reducer} = appData;
export default reducer;