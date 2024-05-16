export const formatForUser = (value: number) => {
    switch(value) {
        case 1: return "Да";
        case 0: return "Нет";
    }
}