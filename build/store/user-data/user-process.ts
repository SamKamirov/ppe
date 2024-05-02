import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { User } from "../../types/state";
import { loginAction } from "../../../src/store/user-process/user-process-api-actions";

type UserDataInitialState = {
    user: Nullable<User>
}

const UserDataInitialState: UserDataInitialState = {
    user: null
}

const userData = createSlice({
    name: SliceNames.UserProcess,
    initialState: UserDataInitialState,
    reducers: {},
    extraReducers(builder) {
      builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
      })  
    },
})

const {reducer} = userData;
export default reducer;