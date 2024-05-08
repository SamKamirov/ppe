import { AxiosInstance } from "axios";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type LoginData = {
  username: string;
  password: string;
}

export type User = {
  id: number;
  username: string;
  token: string;
};
