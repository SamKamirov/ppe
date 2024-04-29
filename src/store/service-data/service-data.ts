import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";

type ServiceData = {

};

const serviceDataInitialState = {

};

const serviceData = createSlice({
    name: SliceNames.ServiceData,
    initialState: serviceDataInitialState,
    reducers: {},
    extraReducers(builder) {
        
    },
})

const {reducer} = serviceData;
export default reducer;