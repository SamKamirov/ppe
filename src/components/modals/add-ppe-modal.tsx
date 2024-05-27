import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setModalType, uploadPPEAction } from "../../api/api-actions";
import { TAddPPE } from "../../types/ppe";
import { ContentTypes } from "./source/const";
import { getPeriods, getSertificates, getSizeTypes } from "../../store/app-data/app-data-selectors";

export const AddPpeModal = () => {
  const dispatch = useAppDispatch();
  const periods = useAppSelector(getPeriods);
  const sizeTypes = useAppSelector(getSizeTypes);
  const sertificates = useAppSelector(getSertificates);

  const [formState, setFormState] = useState<TAddPPE>({
    fullname: '',
    shortname: '',
    lifeSpan: 0,
    sertificateID: 1,
    period: 1,
    toBeReturned: 0,
    isKit: 0,
    sizeType: 1,
    unitType: ''
  });

  const handleClose = () => dispatch(setModalType(ContentTypes.UNKNOWN));
  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    })
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(uploadPPEAction({ ppe: formState }));
  }

  return (
    <div className="modal fade show" role="dialog" id="modal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Добавление записи</h1>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form name="modal-form" id="modal-form" onChange={handleChange} onSubmit={handleSubmit} encType="multipart/form-data">
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
                  {sertificates && sertificates.map((sertificate) => <option key={sertificate.id} value={Number(sertificate.id)}>{sertificate.title}</option>)}
                </select>
                <input type="type" className="form-control hidden" id="sertificateID" name="sertificateID" />
              </div>
              <div className="input-group">
                <label htmlFor="period" className="input-group-text input-group-sm w-50">Периодичность</label>
                <select className="form-select form-control" name="period" defaultValue={1}>
                  {periods && periods.map((period) => <option key={period.id} value={Number(period.id)}>{period.frequency}</option>)}
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
                  {sizeTypes && sizeTypes.map((type) => <option key={type.id} value={type.id}>{type.title}</option>)}
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
