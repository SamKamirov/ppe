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
            browserHistory.push(AppRoutes.Root);
        })
        .addCase(loginAction.rejected, (state) => {
            state.user = null;
            state.authStatus = AuthorizationStatus.NO_AUTH;
        })
        .addCase(logoutAction.fulfilled, (state) => {
            state.user = null;
            state.authStatus = AuthorizationStatus.NO_AUTH;
        })
        .addCase(checkAuthAction.fulfilled, (state, action) => {
            state.user = action.payload;
            state.authStatus = AuthorizationStatus.AUTH;
        })
        .addCase(checkAuthAction.rejected, (state) => {
            state.user = null;
            state.authStatus = AuthorizationStatus.NO_AUTH;
        })
    },
})

const {reducer} = userProcess;
export default reducer;