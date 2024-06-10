import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deletePPEAction, setModalType } from "../../api/api-actions";
import { getSelectedPPE } from "../../store/app-data/app-data-selectors";
import { ContentTypes } from "./source/const";

export const ConfirmModal = () => {
    const selectedPPE = useAppSelector(getSelectedPPE);
    const { id, fullname } = selectedPPE;
    const dispatch = useAppDispatch();
    const handleClose = () => {
        dispatch(deletePPEAction(id));
        dispatch(setModalType(ContentTypes.UNKNOWN));
    };

    return (
        <div className="modal fade show" role="dialog" id="modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Подтвердите действие</h1>
                    </div>
                    <div className="modal-body">
                        <p>Удалить запись?</p>
                        <p>Наименование: {fullname}</p>
                    </div>
                    <div className="modal-footer d-flex flex-row justify-content-between">
                        <div className='my-2'>
                            <button type="button" className="btn btn-danger" aria-label="Close" onClick={handleClose}>Удалить</button>
                        </div>
                        <div className='my-2 d-flex gap-2'>
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};