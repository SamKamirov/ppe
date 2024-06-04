import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPositions, fetchStructuralUnits, setModalType } from "../../api/api-actions";
import { ContentTypes } from "../modals/source/const";
import { getPositions, getStructuralUnits } from "../../store/app-data/app-data-selectors";

type Props = {
    onClick: Dispatch<SetStateAction<boolean>>;
}

export const EmployeeModal = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(setModalType(ContentTypes.UNKNOWN));
    const structuralUnits = useAppSelector(getStructuralUnits);
    const positions = useAppSelector(getPositions);

    useEffect(() => {
        dispatch(fetchStructuralUnits());
        dispatch(fetchPositions());
    }, [dispatch]);

    return (
        <div className="modal fade show" role="dialog" id="modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Просмотр</h1>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClick}></button>
                    </div>
                    <div className="modal-body">
                        <form name="modal-form" id="modal-form" encType="multipart/form-data">
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Персональный номер</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Имя</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Фамилия</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Отчество</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Структурное подразделение</label>
                                <select className="form-select form-control" name="sertificateID" defaultValue={1}>
                                    {structuralUnits && structuralUnits.map((unit) => <option key={unit.id} value={Number(unit.id)}>{unit.title}</option>)}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Должность</label>
                                <select className="form-select form-control" name="sertificateID" defaultValue={1}>
                                    {positions && positions.map((positions) => <option key={positions.id} value={Number(positions.id)}>{positions.title}</option>)}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Дата приёма на работу</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Дата смены должности</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Пол</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Рост</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Размер одежды</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Ращмер обуви</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Размер головного убора</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fullname" className="input-group-text input-group-sm w-50">Размер противогаза</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};