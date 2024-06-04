import { ChangeEvent, ChangeEventHandler } from "react";
import { Period } from "../../../types/ppe";
import dayjs from "dayjs";

const dateCurrency = {
    '1/2': {
        amount: 1,
    }
};

type Props = {
    date: Date;
    period: string;
}

export const setEndDate = ({date, period}: Props) => {
    const test = dayjs(date).add(dateCurrency['1/2'].amount, 'month'); 
    console.log(test);
    console.log(dayjs(test).daysInMonth())
};