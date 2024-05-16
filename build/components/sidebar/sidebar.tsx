import React from 'react';
import { sidebarElements } from './source';
import { Section } from './section';

export const SideBar = () => {
    return (
        <nav className='sidebar my-0 px-0'>
            <ul className='list-group'>
                {sidebarElements.map((item) => <Section item={item} key={item.section} />)}
            </ul>
        </nav>
    );
};
