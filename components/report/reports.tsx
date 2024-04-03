import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../const';
import {NavLink} from 'react-router-dom';

export const Reports = () => {
    return (
        <Fragment>
            <ul className='row list-unstyled list-group rounded-0'>
                <li className='list-group-item border-start-0 border-end-0'>
                    <NavLink to={`${AppRoutes.Reports}/${AppRoutes.RuleCheck}`}>
                        Проверка норм должностей
                    </NavLink>
                </li>
                <li className='list-group-item border-start-0 border-end-0'>
                    <Link to={`${AppRoutes.Reports}/${AppRoutes.Sizes}`}>
                        Размеры
                    </Link>
                </li>
                <li className='list-group-item border-start-0 border-end-0'>
                    <Link to={`${AppRoutes.Reports}/${AppRoutes.Give}`}>
                        Выдача
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
};
