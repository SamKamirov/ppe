import React, { FC, MouseEventHandler } from "react"
import { SidebarElement } from "./source"
import { Link } from "react-router-dom";
import browserHistory from "../../browser-history";
import { AppRoutes } from "../../../const";

type Props = {
    item: SidebarElement;
}

export const Section: FC<Props> = ({ item }) => {

    return (
        <li className='list-group px-0 border-0 p-0'>
            <h4 className='list-item-title px-3 py-2 section'>{item.section}</h4>
            <ul className="list-group rounded-0 p-0">
                {item.subsection.map((sub) => (
                    <Link to={sub.link} className='subsection-link' key={sub.link}>
                        <li className="list-group-item list-group-item-action border-0 subsection-item">{sub.title}</li>
                    </Link>
                ))}
            </ul>
        </li>
    )
}