import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";
import { TAsyncThunk, User } from "../../types/state";


export const loginAction = createAsyncThunk<User, User, TAsyncThunk>(
    `${SliceNames.UserProcess}/login`,
    async ({username, password}, {extra: api}) => {
        console.log(username, password);
        
        const {data} = await api.post('/login', {username, password})
        return data
    }
);