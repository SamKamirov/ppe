import React, { FC } from "react";
import { CreateBtn } from "../../types/utils";

export const CreateCardBtn: FC<CreateBtn> = ({ onClick }) => {
    const handleClick = () => onClick(true);
    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>Создать</button>
        </div>
    )
}