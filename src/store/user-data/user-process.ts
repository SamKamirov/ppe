import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { Nullable } from "vitest";
import { User } from "../../types/state";

type InitialState = {
    user: Nullable<User>
}

const initialState: InitialState = {
    user: null
}

export const UserData = createSlice({
    name: SliceNames.UserData,
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        
    },
})