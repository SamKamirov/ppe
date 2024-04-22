import React, { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { TPreview } from '../../types/ppe';
import { fetchPPEAction, setModalType } from '../../api/api-actions';
import { formatForUser } from './source';
import { ConfirmModal } from '../modals/confirm-modal';
import { ContentTypes } from '../modals/source/const';

export const Preview: FC<TPreview> = ({ ppe }) => {
    const dispatch = useAppDispatch();

    const { fullname, unitType, lifeSpan, isKit, sertificateId, sizeType, toBeReturned } = ppe;

    const handleClose = () => dispatch(fetchPPEAction(null));
    const handleDelete = () => dispatch(setModalType(ContentTypes.Confirm));
    const onChange = () => { };

    const formattedReturnStatus = formatForUser(Number(toBeReturned));
    const formattedIsKit = formatForUser(Number(isKit));

    return (
        <div className={ppe ? 'col sideview' : 'hidden'}>
            <h3>Предпросмотр</h3>
            <div>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Полное наименование
                                    </label>
                                    <input type="text" className="form-control" id="fullname" value={fullname} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50 text-break">
                                        № сертификата или декларации соответствия
                                    </label>
                                    <input type="text" className="form-control" id="sertificateId" value={sertificateId} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Срок эксплуатации
                                    </label>
                                    <input type="text" className="form-control" id="lifeSpan" value={lifeSpan} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Пожлежит возврату
                                    </label>
                                    <input type="text" className="form-control" id="formattedReturnStatus" value={formattedReturnStatus} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Комплект
                                    </label>
                                    <input className="form-control" id="formattedIsKit" value={formattedIsKit} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Тип размера
                                    </label>
                                    <input type="text" className="form-control" id="sizeType" value={sizeType} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Единица измерения
                                    </label>
                                    <input type="text" className="form-control" id="unitType" value={unitType} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex flex-row justify-content-between">
                            <div>
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>Удалить</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Закрыть</button>
                                <button type="button" className="btn btn-primary" onClick={handleClose}>Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
