import React, { FC, Ref } from "react";
import { NavbarTypes } from "./source";
import { PPENavbar } from "./ppe-navbar";
import { PPEUsingNavbar } from "./ppe-using-navbar";
import { CommonNavbar } from "./common-navbar";

type Props = {
    type: string;
    tableRef?: Ref<HTMLTableElement>;

}

export const Navbar: FC<Props> = ({ type, tableRef }) => {
    switch (type) {
        case NavbarTypes.Index: return <PPENavbar />
        case NavbarTypes.PPEUsing: return <PPEUsingNavbar />
        case NavbarTypes.SizesReport: return <CommonNavbar ref={tableRef} />
        case NavbarTypes.RuleCheck: return <CommonNavbar ref={tableRef} />
        case NavbarTypes.Give: return <CommonNavbar ref={tableRef} />
    }
}