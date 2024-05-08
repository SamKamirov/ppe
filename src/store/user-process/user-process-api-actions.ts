import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppRoutes, SliceNames } from "../../../const";
import { LoginData, TAsyncThunk, User } from "../../types/state";
import { saveToken } from "../../components/login/source";


export const loginAction = createAsyncThunk<User, LoginData, TAsyncThunk>(
    `${SliceNames.UserProcess}/login`,
    async ({username, password}, {extra: api}) => {       
        const {data} = await api.post(AppRoutes.Login, {username, password});
        saveToken(data.token);
        return data
    }
);

export const checkAuthAction = createAsyncThunk<User, undefined, TAsyncThunk>(
    `${SliceNames.UserProcess}/checkAuthAction`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get(AppRoutes.Login);
        return data;
    }
);