import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPositions, fetchStructuralUnits, setModalType, uploadEmployee } from "../../api/api-actions";
import { ContentTypes } from "../modals/source/const";
import { getPositions, getStructuralUnits } from "../../store/app-data/app-data-selectors";
import { EmployeeAdd, TEmployee } from "../../types/ppe";

type Props = {
    onClick: Dispatch<SetStateAction<boolean>>;
}

export const EmployeeModal = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => dispatch(setModalType(ContentTypes.UNKNOWN));
    const structuralUnits = useAppSelector(getStructuralUnits);
    const positions = useAppSelector(getPositions);

    const [employeeState, setEmployeeState] = useState<EmployeeAdd>({
        personellNumber: 0,
        firstName: '',
        middleName: '',
        lastName: '',
        structuralUnit: 0,
        position: 0,
        enterDate: '',
        changePositionDate: '',
        sex: '',
        height: 0,
        clothesSize: '',
        shoeSize: 0,
        headwearSize: '',
        gasMaskSize: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(employeeState);

        dispatch(uploadEmployee({ employee: employeeState }));
    };

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setEmployeeState({
            ...employeeState,
            [name]: value
        })
    };

    useEffect(() => {
        dispatch(fetchStructuralUnits());
        dispatch(fetchPositions());
    }, [dispatch]);

    return (
        <div className="modal fade show" role="dialog" id="modal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Добавление сотрудника</h1>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClick}></button>
                    </div>
                    <div className="modal-body">
                        <form name="modal-form" id="modal-form" encType="multipart/form-data" onSubmit={handleSubmit} onChange={handleChange}>
                            <div className="input-group">
                                <label htmlFor="personellNumber" className="input-group-text input-group-sm w-50">Персональный номер</label>
                                <input type="text" className="form-control" id="personellNumber" name="personellNumber" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="firstName" className="input-group-text input-group-sm w-50">Имя</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="middleName" className="input-group-text input-group-sm w-50">Фамилия</label>
                                <input type="text" className="form-control" id="middleName" name="middleName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastName" className="input-group-text input-group-sm w-50">Отчество</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="structuralUnit" className="input-group-text input-group-sm w-50">Структурное подразделение</label>
                                <select className="form-select form-control" name="structuralUnit" defaultValue={1}>
                                    {structuralUnits && structuralUnits.map((unit) => <option key={unit.id} value={Number(unit.id)}>{unit.title}</option>)}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="position" className="input-group-text input-group-sm w-50">Должность</label>
                                <select className="form-select form-control" name="position" defaultValue={1}>
                                    {positions && positions.map((positions) => <option key={positions.id} value={Number(positions.id)}>{positions.title}</option>)}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="enterDate" className="input-group-text input-group-sm w-50">Дата приёма на работу</label>
                                <input type="date" className="form-control" id="enterDate" name="enterDate" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="changePositionDate" className="input-group-text input-group-sm w-50">Дата смены должности</label>
                                <input type="date" className="form-control" id="changePositionDate" name="changePositionDate" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="sex" className="input-group-text input-group-sm w-50">Пол</label>
                                <select className="form-select form-control" name="sex" defaultValue={1}>
                                    <option value={'Муж'}>Муж</option>
                                    <option value={'Жен'}>Жен</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="height" className="input-group-text input-group-sm w-50">Рост</label>
                                <input type="text" className="form-control" id="height" name="height" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="clothesSize" className="input-group-text input-group-sm w-50">Размер одежды</label>
                                <input type="text" className="form-control" id="clothesSize" name="clothesSize" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="shoeSize" className="input-group-text input-group-sm w-50">Ращмер обуви</label>
                                <input type="text" className="form-control" id="shoeSize" name="shoeSize" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="headwearSize" className="input-group-text input-group-sm w-50">Размер головного убора</label>
                                <input type="text" className="form-control" id="headwearSize" name="headwearSize" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="gasMaskSize" className="input-group-text input-group-sm w-50">Размер противогаза</label>
                                <input type="text" className="form-control" id="gasMaskSize" name="gasMaskSize" />
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