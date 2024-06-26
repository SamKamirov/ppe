import React from 'react';
import { HandbookTitles } from './handbook';
import { Reports } from './report/reports';
import { Services } from './services';
import { ToolsList } from '../pages/tools/tools-list';

export const SideBar = () => {
    return (
        <nav className='col sidebar'>
            <ul className='list-unstyled menu'>
                <li className='list-group-item'>
                    <h4 className='list-item-title my-2'>Справочник</h4>
                    <HandbookTitles />
                </li>
                <li className='list-group-item'>
                    <h4 className='list-item-title my-2'>Отчёт</h4>
                    <Reports />
                </li>
                <li className='list-group-item'>
                    <h4 className='list-item-title my-2'>Сервис</h4>
                    <Services />
                </li>
                <li className='list-group-item'>
                    <h4 className='list-item-title my-2'>Инструменты</h4>
                    <ToolsList />
                </li>
            </ul>
        </nav>
    );
};
