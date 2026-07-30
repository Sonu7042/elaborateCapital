export interface NavItem {
    title: string;
    href?: string;
    items?: NavItem[];
}

export interface NavigationData {
    mainNav: NavItem[];
    rightNav: {
        login: NavItem;
    };
}
