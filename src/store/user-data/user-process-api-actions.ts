import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../../const";

const loginAction = createAsyncThunk(
    `${SliceNames.UserData}/login`,
    async () => {
        return
    }
)