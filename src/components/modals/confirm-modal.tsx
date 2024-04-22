import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deletePPEAction } from "../../api/api-actions";
import { getSelectedPPE } from "../../store/app-data/app-data-selectors";

export const ConfirmModal = () => {
    const selectedPPE = useAppSelector(getSelectedPPE);
    const dispatch = useAppDispatch();
    const handleClose = () => dispatch(deletePPEAction(selectedPPE.id))

    return (
        <div className="modal fade show" role="dialog" id="modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Подтвердите действие</h1>
                    </div>
                    <div className="modal-body">
                        <p>Удалить запись?</p>
                        <p>Наименование: {selectedPPE.fullname}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" aria-label="Close" onClick={handleClose}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}