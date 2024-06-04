import React, { Dispatch, FC, SetStateAction } from "react";
import { ContentTypes } from "./source/const";
import { AddPpeModal } from "./add-ppe-modal";
import { ConfirmModal } from "./confirm-modal";
import { AddPPEUsingModal } from "./add-using-modal";
import { EmployeeModal } from "../employee-modal/employee-modal";

export type TModalLayout = {
    contentType: ContentTypes;
}

export const ModalLayout: FC<TModalLayout> = ({ contentType }) => {
    switch (contentType) {
        case ContentTypes.AddPPE: return <AddPpeModal />
        case ContentTypes.Confirm: return <ConfirmModal />;
        case ContentTypes.AddPPEUsing: return <AddPPEUsingModal />
        case ContentTypes.AddEmployee: return <EmployeeModal />;
    }
}