import { createAction } from "@reduxjs/toolkit";
import { PPE } from "../types/ppe";
import { Nullable } from "vitest";

const selectPPE = createAction<Nullable<{ppe: PPE}>>('app/selectPPE');

export {selectPPE};