import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus, SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { User } from "../../types/state";
import { checkAuthAction, loginAction, logoutAction, setMenuOpened } from "./user-process-api-actions";

type UserDataInitialState = {
    user: Nullable<User>,
    authStatus: Nullable<AuthorizationStatus>,
    currentPage: number,
    perPage: number,
    menuOpened: boolean;
};

const UserDataInitialState: UserDataInitialState = {
    user: null,
    authStatus: null,
    currentPage: 1,
    perPage: 14,
    menuOpened: false
}

const userProcess = createSlice({
    name: SliceNames.UserProcess,
    initialState: UserDataInitialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(checkAuthAction.fulfilled, (state, action) => {
            state.authStatus = AuthorizationStatus.AUTH;
            state.user = action.payload;
        })
        .addCase(checkAuthAction.rejected, (state) => {
            state.authStatus = AuthorizationStatus.NO_AUTH;
            state.user = null;
        })
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
        .addCase(setMenuOpened.fulfilled, (state, action) => {
            state.menuOpened = action.payload;
        })
    },
})

const {reducer} = userProcess;
export default reducer;