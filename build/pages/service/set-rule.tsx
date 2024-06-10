import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getEmployees, getPeriods, getPPES, getSertificates } from "../../store/app-data/app-data-selectors";
import { fetchSetRuleAction, setRuleAction } from "../../api/api-actions";
import { Rule } from "../../types/ppe";
import { Errors, sendClientErrorMessage } from "../../utils/send-error-message";
import { setEndDate } from "./source";

export const SetRule = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchSetRuleAction());
    }, [dispatch]);

    const [ruleState, setState] = useState<Rule>({
        ppe: '',
        period: '',
        amount: 0,
        dateStart: new Date(),
        dateEnd: new Date(),
        employee: '',
        sertificate: ''
    });

    const ppes = useAppSelector(getPPES);
    const employees = useAppSelector(getEmployees);
    const periods = useAppSelector(getPeriods);
    const sertificates = useAppSelector(getSertificates);

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setState({
            ...ruleState,
            [name]: value
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ruleState.dateStart > ruleState.dateEnd) {
            sendClientErrorMessage({ type: 'wrongDate' })
            return;
        };

        dispatch(setRuleAction({ setRuleItem: ruleState }))
    };

    const handleInputChange = () => {
        setEndDate({ date: ruleState.dateStart, period: ruleState.period })
    };

    return (
        <section>
            <div className="container set-rule">
                <h1 className='my-2 fs-1'>Установка норм</h1>
                <div className="modal-body">
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="ppe" className="form-label">СИЗ</label>
                            <select className="form-select" name="ppe">
                                <option value={''}>Выберите СИЗ</option>
                                {ppes && ppes.map((ppe) => <option value={ppe.id} key={ppe.id}>{ppe.fullname}</option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="period" className="form-label">Периодичность</label>
                            <select className="form-select" name="period">
                                <option value={''}>---</option>
                                {periods && periods.map((period) => <option value={period.id} key={period.id}>{period.frequency}</option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Количество</label>
                            <input type="number" className="form-control" name="amount" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateStart" className="form-label">Дата начала</label>
                            <input type="date" className="form-control" name="dateStart" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateEnd" className="form-label">Дата окончания</label>
                            <input type="date" className="form-control" name="dateEnd" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employee" className="form-label">Сотрудник</label>
                            <select className="form-select" name="employee">
                                <option value={''}>Выберите сотрудника</option>
                                {employees && employees.map((employee) => <option value={employee.id} key={employee.id}>
                                    {employee.firstName} {employee.middleName} {employee.lastName}
                                </option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sertificate" className="form-label">Сертификат</label>
                            <select className="form-select" name="sertificate">
                                <option value={''}>Выберите сертификат</option>
                                {sertificates && sertificates.map((sertificate) => <option value={sertificate.id} key={sertificate.id}>{sertificate.title}</option>)}
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}