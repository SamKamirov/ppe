import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setModalType, uploadPPEAction } from "../../api/api-actions";
import { TAddPPE } from "../../types/ppe";
import { ContentTypes } from "./source/const";

export const AddPpeModal = () => {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<TAddPPE>({
    fullname: '',
    shortname: '',
    sertificateId: 0,
    lifeSpan: 0,
    toBeReturned: 0,
    isKit: 0,
    sizeType: 0,
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
                  htmlFor="lifeSpan"
                  className="input-group-text input-group-sm w-50"
                >
                  Срок эксплуатации, мес
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lifeSpan"
                  name="lifeSpan"
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
