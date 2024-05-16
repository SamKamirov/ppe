import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const';
import { NavLink } from 'react-router-dom';

export const Reports = () => {
    return (
        <Fragment>
            <ul className='list-group rounded-0 border-end-0'>
                <li className='list-group-item border-start-0 border-end-0'>
                    <Link to={AppRoutes.RuleCheck} className='link-underline-opacity-0'>Проверка норм должностей</Link>
                </li>
                <li className='list-group-item border-start-0 border-end-0'>
                    <Link to={AppRoutes.Sizes} className='link-underline-opacity-0'>Размеры</Link>
                </li>
                <li className='list-group-item border-start-0 border-end-0'>
                    <Link to={AppRoutes.Give} className='link-underline-opacity-0'>Выдача</Link>
                </li>
            </ul>
        </Fragment>
    );
};
