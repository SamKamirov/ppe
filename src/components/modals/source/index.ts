import { TAddPPE } from "../../../types/ppe"

type Props = {
    ppe: TAddPPE;
};

export const isValidPPE = ({ppe}: Props) => {
    const {fullname, shortname, isKit, lifeSpan, sizeType, toBeReturned, unitType} = ppe;
    return fullname && shortname && Number.isInteger(isKit) && Number(lifeSpan) && Number(sizeType) && Number.isInteger(toBeReturned) && unitType;
};