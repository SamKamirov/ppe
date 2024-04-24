import { TAddPPE } from "../../types/ppe"
import { TServerAct, TServerPPE } from "../../types/server"

export const adaptPPEToServer = (data: TAddPPE) => {
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

export const adaptPPEToClient = (data: TServerPPE) => {
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

export const adaptActToClient = (data: TServerAct) => {
    return {
        id: data.id,
        actTitle: data.act_title,
        actTitleFull: data.act_title_full
    }
}

export const adaptActsToClients = (data: TServerAct[]) => data.map((item) => adaptActToClient(item));