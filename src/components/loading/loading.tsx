import React from "react"
import { TailSpin } from "react-loader-spinner"

export const Loading = () => {
    return (
        <div className="d-flex flex-row justify-content-center full-height align-items-center">
            <TailSpin
                visible={true}
                height="80"
                width="80"
                ariaLabel="tail-spin-loading"
                color="#003274"
            />
        </div>
    )
}