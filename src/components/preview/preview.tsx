import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TPreview } from '../../types/ppe';
import { fetchPPEAction, setModalType } from '../../api/api-actions';
import { formatForUser } from './source';
import { ConfirmModal } from '../modals/confirm-modal';
import { ContentTypes } from '../modals/source/const';
import { getHeightRanges } from '../../store/app-data/app-data-selectors';

export const Preview: FC<TPreview> = ({ ppe }) => {
    const dispatch = useAppDispatch();

    const { fullname, unitType, lifeSpan, isKit, sizeType, toBeReturned } = ppe;
    const { maxHeight, minHeight } = useAppSelector(getHeightRanges).find((item) => item.id === sizeType);

    const handleClose = () => dispatch(fetchPPEAction(null));
    const handleDelete = () => dispatch(setModalType(ContentTypes.Confirm));
    const onChange = () => { };

    const formattedReturnStatus = formatForUser(Number(toBeReturned));
    const formattedIsKit = formatForUser(Number(isKit));

    return (
        <div className='sideview'>
            <h3>Предпросмотр</h3>
            <div className="modal-dialog modal-lg py-3">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="input-group">
                            <label className="form-control">Полное наименование</label>
                            <label className="form-control text-break">{fullname}</label>
                        </div>
                        {/* <div className="input-group">
                            <label className="form-control">Сертификат соответствия</label>
                            <label className="form-control text-break">{sertificateId}</label>
                        </div> */}
                        <div className="input-group">
                            <label className="form-control">Срок эксплуатации, мес</label>
                            <label className="form-control text-break">{lifeSpan}</label>
                        </div>
                        <div className="input-group">
                            <label className="form-control">Пожлежит возврату</label>
                            <label className="form-control text-break">{formattedReturnStatus}</label>
                        </div>
                        <div className="input-group">
                            <label className="form-control">Комплект</label>
                            <label className="form-control text-break">{formattedIsKit}</label>
                        </div>
                        <div className="input-group">
                            <label className="form-control">Тип размера</label>
                            <label className="form-control text-break">от {minHeight} до {maxHeight}</label>
                        </div>
                        <div className="input-group">
                            <label className="form-control">Единица измерения</label>
                            <label className="form-control">{unitType}</label>
                        </div>
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
    );
};
