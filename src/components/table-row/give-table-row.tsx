import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TEmployee } from "../../types/ppe";

type Props = {
    employee: TEmployee;
    onClick: Dispatch<SetStateAction<boolean>>;
};

export const GiveTableRow = () => {
    return (
        <tr className='text-center table-row'>
            <td className='text-center align-middle'>Работник</td>
        </tr>
    );
};