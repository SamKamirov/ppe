import { Nullable } from "vitest";
import { PPE } from "./ppe";
import { AxiosInstance } from "axios";
import { store } from "../store";
import { ContentTypes } from "../components/modals/source/const";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TInitialState = {
  ppes: Nullable<PPE[]>;
  selectedPPE: Nullable<PPE>;
  isLoading: boolean;
  modalType: ContentTypes;
  error: Nullable<string>;
};

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
