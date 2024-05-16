import { createSlice } from "@reduxjs/toolkit";
import { AppRoutes, AuthorizationStatus, SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { User } from "../../types/state";
import { checkAuthAction, loginAction, logoutAction } from "./user-process-api-actions";
import browserHistory from "../../browser-history";

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
        .addCase(loginAction.rejected, (state) => {
            state.user = null;
            state.authStatus = AuthorizationStatus.NO_AUTH;
        })
        .addCase(logoutAction.fulfilled, (state) => {
            state.authStatus = AuthorizationStatus.NO_AUTH;
            state.user = null;
        })
        .addCase(checkAuthAction.fulfilled, (state, action) => {
            state.authStatus = AuthorizationStatus.AUTH;
            state.user = action.payload;
        })
        .addCase(checkAuthAction.rejected, (state) => {
            state.authStatus = AuthorizationStatus.NO_AUTH;
            state.user = null;
        })
    },
})

const {reducer} = userProcess;
export default reducer;