interface AppProps {
    items: string[];
}

interface MenuItemProps {
    label: string;
    path: string;
    component: any;
    exact: boolean;
}