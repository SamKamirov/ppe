import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useRef, useState } from "react";
import { TModalWindow } from "../../types/utils";
import { useAppDispatch } from "../../app/hooks";
import { fetchPPEsAction, uploadPPEAction } from "../../api/api-actions";
import { TAddPPE } from "../../types/ppe";

export const AddPpeModal: FC<TModalWindow> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<TAddPPE>({
    fullname: '',
    shortname: '',
    sertificateid: 0,
    startdate: new Date(),
    enddate: new Date(),
    tobereturned: 0,
    isKit: 0,
    sizetype: 0,
    unittype: ''
  });

  const handleClose = () => onClose(false);
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
    dispatch(fetchPPEsAction());
    handleClose();
  }

  return (
    <div className="modal fade show" role="dialog" id="modal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Добавление записи</h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form name="modal-form" id="modal-form" onChange={handleChange} onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input-group">
                <label
                  htmlFor="fullname"
                  className="input-group-text input-group-sm w-50"
                >
                  Наименование полное
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="shortname"
                  className="input-group-text input-group-sm w-50"
                >
                  Наименование
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="shortname"
                  name="shortname"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="sertificateId"
                  className="input-group-text input-group-sm w-50"
                >
                  № сертификата или декларации соответствия
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sertificateId"
                  name="sertificateId"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="startDate"
                  className="input-group-text input-group-sm w-50"
                >
                  Дата начала эксплуатации
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="endDate"
                  className="input-group-text input-group-sm w-50"
                >
                  Дата окончания эксплуатации
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="toBeReturned"
                  className="input-group-text input-group-sm w-50"
                >
                  Подлежит возврату
                </label>
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                  name="toBeReturned"
                  defaultValue={0}
                >
                  <option value={1}>
                    Да
                  </option>
                  <option value={0}>Нет</option>
                </select>
                <input
                  type="type"
                  className="form-control hidden"
                  id="toBeReturned"
                  name="toBeReturned"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="is-kit"
                  className="input-group-text input-group-sm w-50"
                >
                  Комплект
                </label>
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                  name="isKit"
                  defaultValue={0}
                >
                  <option value={1}>
                    Да
                  </option>
                  <option value={0}>Нет</option>
                </select>
                <input
                  type="text"
                  className="form-control hidden"
                  id="isKit"
                  name="isKit"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="sizeType"
                  className="input-group-text input-group-sm w-50"
                >
                  Тип размера
                </label>
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                  name="sizeType"
                >
                  <option value={1}>
                    1
                  </option>
                  <option value={0}>2</option>
                  <option value={"no-size"}>Без размера</option>
                </select>
                <input
                  type="text"
                  className="form-control hidden"
                  id="sizeType"
                  name="sizeType"
                />
              </div>
              <div className="input-group">
                <label
                  htmlFor="unitType"
                  className="input-group-text input-group-sm w-50"
                >
                  Единица измерения
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="unitType"
                  name="unitType"
                />
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
    </div>
  );
};
