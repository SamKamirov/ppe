import { AxiosInstance } from "axios";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type User = {
  username: string;
  password: string;
}
