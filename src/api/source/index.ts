import { TAddPPE } from "../../types/ppe"
import { TServerPPE } from "../../types/server"

export const adaptToServer = (data: TAddPPE) => {
    return {
        fullname: data.fullname,
        shortname: data.shortname,
        sertificateid: data.sertificateId,
        lifespan: data.lifeSpan,
        tobereturned: data.toBeReturned,
        iskit: data.isKit,
        sizetype: data.sizeType,
        unittype: data.unitType
    }
    
}

export const adaptToClient = (data: TServerPPE) => {
    return {
        id: data.id,
        fullname: data.fullname,
        shortname: data.shortname,
        sertificateId: data.sertificateid,
        lifeSpan: data.lifespan,
        toBeReturned: data.tobereturned,
        isKit: data.iskit,
        sizeType: data.sizetype,
        unitType: data.unittype
    }
}