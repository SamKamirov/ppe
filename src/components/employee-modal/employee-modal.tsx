import React, { Dispatch, SetStateAction } from "react";

type Props = {
    onClick: Dispatch<SetStateAction<boolean>>;
}

export const EmployeeModal = () => {
    return (
        <div className="modal fade show" role="dialog" id="modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Просмотр</h1>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form name="modal-form" id="modal-form" encType="multipart/form-data">
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Наименование полное</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="shortname" className="input-group-text input-group-sm w-50">Наименование краткое</label>
                                <input type="text" className="form-control" id="shortname" name="shortname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lifeSpan" className="input-group-text input-group-sm w-50">Срок эксплуатации, мес</label>
                                <input type="text" className="form-control" id="lifeSpan" name="lifeSpan" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="sertificateID" className="input-group-text input-group-sm w-50">Сертификат соответствия</label>
                                <select className="form-select form-control" name="sertificateID" defaultValue={1}>

                                </select>
                                <input type="type" className="form-control hidden" id="sertificateID" name="sertificateID" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="period" className="input-group-text input-group-sm w-50">Периодичность</label>
                                <select className="form-select form-control" name="period" defaultValue={1}>

                                </select>
                                <input type="type" className="form-control hidden" id="period" name="period" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="toBeReturned" className="input-group-text input-group-sm w-50">Подлежит возврату</label>
                                <select className="form-select form-control" aria-label="Default select example" name="toBeReturned" defaultValue={0}>
                                    <option value={0}>Нет</option>
                                    <option value={1}>Да</option>
                                </select>
                                <input type="type" className="form-control hidden" id="toBeReturned" name="toBeReturned" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="is-kit" className="input-group-text input-group-sm w-50">Комплект</label>
                                <select className="form-select form-control" aria-label="Default select example" name="isKit" defaultValue={0}>
                                    <option value={1}>Да</option>
                                    <option value={0}>Нет</option>
                                </select>
                                <input type="text" className="form-control hidden" id="isKit" name="isKit" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="sizeType" className="input-group-text input-group-sm w-50">Тип размера</label>
                                <select className="form-select form-control" aria-label="Default select example" name="sizeType" defaultValue={0}>

                                </select>
                                <input type="text" className="form-control hidden" id="sizeType" name="sizeType" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="unitType" className="input-group-text input-group-sm w-50">Единица измерения</label>
                                <input type="text" className="form-control" id="unitType" name="unitType" />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};