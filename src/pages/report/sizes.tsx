import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEAction } from "../../api/api-actions";

export const Sizes = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPPEAction(null))
    }, [dispatch])

    return (
        <h1>Размеры</h1>
    )
}