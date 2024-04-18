import { Nullable } from "vitest";
import { PPE, PPEFull } from "./ppe";
import { AxiosInstance } from "axios";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TInitialState = {
  ppes: Nullable<PPEFull[]>;
  selectedPPE: Nullable<PPE>;
};

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
