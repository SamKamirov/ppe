import React, { FC, Ref } from "react";
import { NavbarTypes } from "./source";
import { PPENavbar } from "./ppe-navbar";
import { PPEUsingNavbar } from "./ppe-using-navbar";
import { CommonNavbar } from "./common-navbar";

type Props = {
    type: keyof typeof NavbarTypes;
    tableRef?: Ref<HTMLTableElement>;
}

// const navbars = {
//     NavbarTypes:  
// };

export const Navbar: FC<Props> = ({ type, tableRef }) => {
    switch (type) {
        case NavbarTypes.Index: return <PPENavbar />
        case NavbarTypes.PPEUsing: return <PPEUsingNavbar />
        case NavbarTypes.SizesReport: return <CommonNavbar type={NavbarTypes.SizesReport} ref={tableRef} />
        case NavbarTypes.RuleCheck: return <CommonNavbar type={NavbarTypes.RuleCheck} ref={tableRef} />
        case NavbarTypes.Give: return <CommonNavbar type={NavbarTypes.Give} ref={tableRef} />
    }
}