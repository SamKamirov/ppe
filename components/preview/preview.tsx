import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PPE, TPreview } from '../../types/ppe';
import { selectPPE } from '../../store/action';

export const Preview: FC<TPreview> = ({ ppe }) => {
    const [isVisible, setSideviewVisible] = useState(true);
    const dispatch = useAppDispatch();
    const handleClose = () => dispatch(selectPPE({ ppe: null }));

    const onChange = () => { };

    const { title, id, fullTitle, unit } = ppe;

    return (
        <div className={isVisible ? 'col sideview' : 'hidden'}>
            <h3>Предпросмотр</h3>
            <div>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Наименование
                                    </label>
                                    <input type="text" className="form-control" id="ppe_name" value={title} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Код
                                    </label>
                                    <input type="text" className="form-control" id="ppe_id" value={id} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Наименование полное
                                    </label>
                                    <textarea className="form-control" id="ppe_fullname" rows={3} value={fullTitle} onChange={onChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="personell_number" className="input-group-text input-group-sm w-50">
                                        Единица измерения
                                    </label>
                                    <input type="text" className="form-control" id="ppe_unit" value={unit} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Закрыть</button>
                            <button type="button" className="btn btn-primary" onClick={handleClose}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
