import React, { useEffect } from "react";
import { UsingHeaders } from "../../components/using-headers";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEAction } from "../../api/api-actions";

export const Using = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPPEAction(null))
    }, [dispatch])

    return (
        <div className="col px-0">
            <section className="using">
                <h1>Обоснование использования СИЗ</h1>
                <table className="table">
                    <UsingHeaders />
                    <tbody></tbody>
                </table>
            </section>
        </div>
    )
}