import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus, SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { User } from "../../types/state";
import { checkAuthAction, loginAction } from "./user-process-api-actions";

type UserDataInitialState = {
    user: Nullable<User>,
    authStatus: Nullable<AuthorizationStatus>
}

const UserDataInitialState: UserDataInitialState = {
    user: null,
    authStatus: null
}

const userProcess = createSlice({
    name: SliceNames.UserProcess,
    initialState: UserDataInitialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(loginAction.fulfilled, (state, action) => {
            state.user = action.payload;
            state.authStatus = AuthorizationStatus.AUTH;
        })
        .addCase(checkAuthAction.fulfilled, (state, action) => {
            state.user = action.payload;
            state.authStatus = AuthorizationStatus.AUTH;
        })
        .addCase(checkAuthAction.rejected, (state) => {
            state.user = null;
            state.authStatus = AuthorizationStatus.UNKNOWN;
        })
    },
})

const {reducer} = userProcess;
export default reducer;