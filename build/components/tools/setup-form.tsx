import React, { FC, Fragment, useRef, useState } from "react";
import { TSetupForm } from "../../types/utils";

export const SetupForm: FC<TSetupForm> = ({ onClose }) => {
    const handleClose = () => onClose(false);
    return (
        <Fragment>
            <div className="modal fade show" role="dialog" id='modal'>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Инициализация</h1>
                            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">Табельный номер</label>
                                    <input type="text" className="form-control" id="personell_number" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">ФИО</label>
                                    <input type="text" className="form-control" id="personell_number" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">Структурное подразделение</label>
                                    <input type="text" className="form-control" id="personell_number" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Закрыть</button>
                            <button type="button" className="btn btn-primary">Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}