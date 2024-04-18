import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import { TAsyncThunk } from "../types/state";
import { PPE, PPEFull, TAddPPE } from "../types/ppe";

type TPPEData = {
  ppe: TAddPPE;
}

const fetchPPEsAction = createAsyncThunk<PPEFull[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchPPEs`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get("/ppes");
    return data;
  },
);

const uploadPPEAction = createAsyncThunk<void, TPPEData, TAsyncThunk>(
  `${SliceNames.AppData}/uploadPPE`,
  async ({ppe}, { extra: api }) => {
    console.log(ppe)
    const { data } = await api.post(`/ppes/upload`, {...ppe});
    return data;
  },
);

const fetchPPEAction = createAsyncThunk<PPE, string | undefined | number, TAsyncThunk>(
  `${SliceNames.AppData}/fetchPPE`,
  async (ppeId: string | undefined, {extra: api}) => {
    const {data} = await api.get(`/ppes/ppes:${ppeId}`)
    return data;
  }
)

export { fetchPPEsAction, uploadPPEAction, fetchPPEAction };
