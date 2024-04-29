import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceNames } from "../../const";
import { TAsyncThunk } from "../types/state";
import { PPE, Sertificate, TAct, TAddAct, TAddPPE, TUploadUsingAct } from "../types/ppe";
import { adaptActsToClients, adaptActToClient, adaptPPEToClient } from "./source";
import { TServerAct, TServerPPE } from "../types/server";
import { ContentTypes } from "../components/modals/source/const";
import { Nullable } from "vitest";
import { SizeItem } from "../components/table-row/size-report-table-row";

type TPPEData = {ppe: TAddPPE};
type TUploadPPE = {message: string}

const fetchPPEsAction = createAsyncThunk<PPE[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchPPEs`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get("/ppes");
    return data;
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
    const { data } = await api.get(`/ppes/${ppeId}`)    
    return data;
  }
);

const deletePPEAction = createAsyncThunk<void, string | undefined | number, TAsyncThunk>(
  `${SliceNames.AppData}/deletePPE`,
  async (ppeId: string | undefined, {dispatch, extra: api}) => {
    const { data } = await api.delete(`/ppes/${ppeId}`);
    dispatch(fetchPPEsAction());
    return data;
  }
);

const setModalType = createAsyncThunk<ContentTypes, ContentTypes, TAsyncThunk>(
  `${SliceNames.AppData}/setModalType`,
  async (contentType: ContentTypes) => {
    return contentType;
  }
);

const setError = createAsyncThunk<Nullable<string>, Nullable<string>, TAsyncThunk>(
  `${SliceNames.AppData}/setModalType`,
  async (error: Nullable<string>) => {
    return error;
  }
);

const uploadUsingAct = createAsyncThunk<TAddAct, TUploadUsingAct, TAsyncThunk>(
  `${SliceNames.AppData}/uploadUsingAct`,
  async ({act}, {extra: api}) => {   
    console.log(act);
    const {data} = await api.post(`/ppes/acts/act`, {...act});
    return data
  }
);

const fetchActsAction = createAsyncThunk<TAct[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchActs`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TServerAct[]>('/ppes/acts/act');
    const adaptedActToClient = adaptActsToClients(data);
    return adaptedActToClient;
  }
);

const fetchSertificates = createAsyncThunk<Sertificate[], undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchSertificates`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get('/sertificates')
    return data;
  }
);

const fetchSizesReport = createAsyncThunk<SizeItem[], undefined, TAsyncThunk>(
  `${SliceNames.ReportData}/fetchSizesReport`,
  async (_agr, {extra: api}) => {
    const {data} = await api.get('/sizes');
    return data
  }
)

export { fetchPPEsAction, uploadPPEAction, fetchPPEAction, deletePPEAction, setModalType, fetchActsAction, uploadUsingAct, fetchSertificates, fetchSizesReport};
