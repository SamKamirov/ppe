import { Nullable } from "vitest";
import { store } from "../store/store";
import { ppes } from "../mocks/ppe";
import { PPE } from "./ppe";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TInitialState = {
    ppe: Nullable<PPE>;
    ppes: PPE[];
}