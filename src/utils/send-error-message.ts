import { toast } from "react-toastify"


const errors = {
    wrongDate: 'Ошибка, проверьте правильность введённой даты'
};

type Props = {
    type: keyof typeof errors;
};


export const sendClientErrorMessage = ({type}: Props) => toast.error(errors[type]);