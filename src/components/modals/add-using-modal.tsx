import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { TAddAct } from "../../types/ppe";
import { setModalType, uploadPPEAction, uploadUsingAct } from "../../api/api-actions";
import { ContentTypes } from "./source/const";

export const AddPPEUsingModal = () => {
    const dispatch = useAppDispatch();

    const [formState, setFormState] = useState<TAddAct>({
        actTitle: '',
        actTitleFull: ''
    });

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    const handleClose = () => dispatch(setModalType(ContentTypes.UNKNOWN));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(uploadUsingAct({ act: formState }))
    }

    return (
        <div className="modal fade show" role="dialog" id="modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Добавление нового акта</h1>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <form name="modal-form" id="modal-form" onChange={handleChange} onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="modal-body">
                            <div className="input-group">
                                <label
                                    htmlFor="actTitle"
                                    className="input-group-text input-group-sm w-50"
                                >
                                    Наименование правового акта
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="actTitle"
                                    name="actTitle"
                                />
                            </div>
                            <div className="input-group">
                                <label
                                    htmlFor="actTitleFull"
                                    className="input-group-text input-group-sm w-50"
                                >
                                    Полное наименование правового акта
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="actTitleFull"
                                    name="actTitleFull"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                                Сохранить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}