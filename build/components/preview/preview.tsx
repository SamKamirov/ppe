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

    const formattedReturnStatus = formatForUser(Number(toBeReturned));
    const formattedIsKit = formatForUser(Number(isKit));

    return (
        <nav className="col bg-body-tertiary">
            <div className="container-fluid">
                <div className="offcanvas-header my-2">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Предпросмотр</h5>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                        <li className="input-group">
                            <label className="form-control">Полное наименование</label>
                            <label className="form-control text-break">{fullname}</label>
                        </li>
                        <li className="input-group">
                            <label className="form-control">Срок эксплуатации, мес</label>
                            <label className="form-control text-break">{lifeSpan}</label>
                        </li>
                        <li className="input-group">
                            <label className="form-control">Пожлежит возврату</label>
                            <label className="form-control text-break">{formattedReturnStatus}</label>
                        </li>
                        <li className="input-group">
                            <label className="form-control">Комплект</label>
                            <label className="form-control text-break">{formattedIsKit}</label>
                        </li>
                        <li className="input-group">
                            <label className="form-control">Тип размера</label>
                            <label className="form-control text-break">от {minHeight} до {maxHeight}</label>
                        </li>
                        <li className="input-group">
                            <label className="form-control">Единица измерения</label>
                            <label className="form-control">{unitType}</label>
                        </li>
                    </ul>
                    <div className='d-flex flex-row justify-content-between'>
                        <div className='my-2'>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Удалить</button>
                        </div>
                        <div className='my-2 d-flex gap-2'>
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Закрыть</button>
                            <button type="button" className="btn btn-primary" onClick={handleClose}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
