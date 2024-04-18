import { createAction } from "@reduxjs/toolkit";
import { PPE, PPEFull } from "../types/ppe";
import { Nullable } from "vitest";

const selectPPE = createAction<Nullable<{ppe: PPEFull }>>('app/selectPPE');

export {selectPPE};