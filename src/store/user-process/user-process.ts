import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { User } from "../../types/state";

type UserDataInitialState = {
    user: Nullable<User>
}

const UserDataInitialState: UserDataInitialState = {
    user: null
}

const userProcess = createSlice({
    name: SliceNames.UserProcess,
    initialState: UserDataInitialState,
    reducers: {},
    extraReducers(builder) {
        
    },
})

const {reducer} = userProcess;
export default reducer;