import React, { Fragment, useEffect, useState } from "react"
import { CreateCardBtn } from "../../components/tools/create-card-btn"
import { SetupForm } from "../../components/tools/setup-form";

export const Tools = () => {
    const [isCreateBtnClicked, setCreateBtnClicked] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (isCreateBtnClicked) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    }, [isCreateBtnClicked]);

    return (
        <Fragment>
            <div>
                <h1>Личная карточка сотрудника</h1>
                <CreateCardBtn onClick={setCreateBtnClicked} />
                {isModalOpen && <SetupForm onClose={setCreateBtnClicked} />}
            </div>
        </Fragment>
    )
}