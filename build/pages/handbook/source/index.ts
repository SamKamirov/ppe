import { SortTypes } from "../../../../const";
import { ContentTypes } from "../../../components/modals/source/const";
import { PPE } from "../../../types/ppe";

type SortPPES = {
    elements: PPE[];
    type: SortTypes;
}

export const isModal = (contentType: ContentTypes) => contentType != ContentTypes.UNKNOWN; 

export const sortPPES = ({elements, type}: SortPPES) => {
    switch(type) {
        case SortTypes.Alphabet: return [...elements].sort();
        case SortTypes.ID: return [...elements].sort((prev, next) => next.id - prev.id);
        case SortTypes.DEFAULT: return elements;
    }
}