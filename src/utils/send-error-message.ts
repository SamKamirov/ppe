import { toast } from "react-toastify"


export const Errors = {
    wrongDate: 'Ошибка, проверьте правильность введённой даты',
    notValidPPE: 'Ошибка, не все поля заполнены корректно'
};

type Props = {
    type: keyof typeof Errors;
};


export const sendClientErrorMessage = ({type}: Props) => toast.error(Errors[type]);