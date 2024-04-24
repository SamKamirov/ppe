import React, { FC, Ref } from "react";
import { NavbarTypes } from "./source";
import { PPENavbar } from "./ppe-navbar";
import { PPEUsingNavbar } from "./ppe-using-navbar";

type Props = {
    type: string;
    tableRef?: Ref<HTMLTableElement>
}

export const Navbar: FC<Props> = ({ type, tableRef }) => {
    switch (type) {
        case NavbarTypes.Index: return <PPENavbar ref={tableRef} />
        case NavbarTypes.PPEUsing: return <PPEUsingNavbar />
    }
}