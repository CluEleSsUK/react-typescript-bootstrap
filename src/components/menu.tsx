import * as React from 'react';
import {Link} from "react-router-dom";
import Users from "./users";
import Receipts from "./receipts";

export const menuItems: MenuItemProps[] = [
    {
        label: "Home",
        path: "/",
        component: Users,
        exact: true,
    },
    {
        label: "Users",
        path: "/users",
        component: Users,
        exact: false,
    },
    {
        label: "Receipts",
        path: "/receipts",
        component: Receipts,
        exact: false,
    }
];

export default class Menu extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    {menuItems.map(link =>
                        <li key={link.path}>
                            <Link className="menu-link" to={link.path}>{link.label}</Link>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}
