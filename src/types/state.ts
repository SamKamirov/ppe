import { Nullable } from "vitest";
import { PPE, Sertificate, TAct } from "./ppe";
import { AxiosInstance } from "axios";
import { store } from "../store";
import { ContentTypes } from "../components/modals/source/const";
import { TServerAct } from "./server";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type User = {
  username: string;
}
