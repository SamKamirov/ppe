import React from "react";
import { profileSideBarElements } from ".";
import { Section } from "../../../components/sidebar/section";

export const ProfileSideBar = () => {
    return (
        <nav className='sidebar my-0 px-0'>
            <ul className='list-group'>
                {profileSideBarElements.map((item) => <Section item={item} key={item.section} />)}
            </ul>
        </nav>
    );
};
