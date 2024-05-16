import {Dispatch, ReactNode, SetStateAction} from 'react';

export type RouteChildren = {
    children?: ReactNode;
};

export type TableRef = {
    ref?: HTMLElement;
};

export type ForwardedRef = {
    
}

export type CreateBtn = {
    onClick: Dispatch<SetStateAction<boolean>>
}

export type TModalWindow = {
    onClose: Dispatch<SetStateAction<boolean>>
}