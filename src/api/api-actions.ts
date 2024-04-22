import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import { TAsyncThunk } from "../types/state";
import { PPE, TAddPPE } from "../types/ppe";
import { adaptToClient } from "./source";
import { TServerPPE } from "../types/server";
import { ContentTypes } from "../components/modals/source/const";
import { Nullable } from "vitest";
import { toast } from "react-toastify";

type TPPEData = {ppe: TAddPPE};
type TUploadPPE = {message: string}

const fetchPPEsAction = createAsyncThunk<PPE[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchPPEs`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get("/ppes");
    const adaptedToClient = Array.from(data, adaptToClient);
    return adaptedToClient;
  },
);

const uploadPPEAction = createAsyncThunk<TUploadPPE, TPPEData, TAsyncThunk>(
  `${SliceNames.AppData}/uploadPPE`,
  async ({ppe}, { dispatch, extra: api }) => {
    const { data } = await api.post(`/ppes/upload`, {...ppe});
    dispatch(fetchPPEsAction());
    return data;
  },
);

const fetchPPEAction = createAsyncThunk<PPE, string | undefined | number, TAsyncThunk>(
  `${SliceNames.AppData}/fetchPPE`,
  async (ppeId: string | undefined, {extra: api}) => {
    const { data } = await api.get<TServerPPE>(`/ppes/${ppeId}`)   
    const adaptedToClient = data && adaptToClient(data);    
    return adaptedToClient;
  }
)

const deletePPEAction = createAsyncThunk<void, string | undefined | number, TAsyncThunk>(
  `${SliceNames.AppData}/deletePPE`,
  async (ppeId: string | undefined, {dispatch, extra: api}) => {
    const { data } = await api.delete(`/ppes/${ppeId}`);
    dispatch(fetchPPEsAction());
    return data;
  }
)

const setModalType = createAsyncThunk<ContentTypes, ContentTypes, TAsyncThunk>(
  `${SliceNames.AppData}/setModalType`,
  async (contentType: ContentTypes) => {
    return contentType;
  }
)

const setError = createAsyncThunk<Nullable<string>, Nullable<string>, TAsyncThunk>(
  `${SliceNames.AppData}/setModalType`,
  async (error: Nullable<string>) => {
    return error;
  }
)

export { fetchPPEsAction, uploadPPEAction, fetchPPEAction, deletePPEAction, setModalType, setError };
