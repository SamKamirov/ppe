import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import { TAsyncThunk } from "../types/state";
import { PPE, TAct, TAddAct, TAddPPE, TUploadUsingAct } from "../types/ppe";
import { adaptActsToClients, adaptActToClient, adaptPPEToClient } from "./source";
import { TServerAct, TServerPPE } from "../types/server";
import { ContentTypes } from "../components/modals/source/const";
import { Nullable } from "vitest";

type TPPEData = {ppe: TAddPPE};
type TUploadPPE = {message: string}

const fetchPPEsAction = createAsyncThunk<PPE[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchPPEs`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get("/ppes");
    const adaptedToClient = Array.from(data, adaptPPEToClient);
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
    console.log(ppeId);  
    const { data } = await api.get<TServerPPE>(`/ppes/${ppeId}`)   
    const adaptedToClient = data && adaptPPEToClient(data);    
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

const uploadUsingAct = createAsyncThunk<TAddAct, TUploadUsingAct, TAsyncThunk>(
  `${SliceNames.AppData}/uploadUsingAct`,
  async ({act}, {extra: api}) => {   
    console.log(act);
    const {data} = await api.post(`/ppes/acts/act`, {...act});
    return data
  }
)

const fetchActsAction = createAsyncThunk<TAct[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchActs`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TServerAct[]>('/ppes/acts/act');
    const adaptedActToClient = adaptActsToClients(data);
    return adaptedActToClient;
  }
)

export { fetchPPEsAction, uploadPPEAction, fetchPPEAction, deletePPEAction, setModalType, fetchActsAction, uploadUsingAct};
