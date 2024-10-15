interface MenuItem {
    path?: string;
    subMenu?: MenuItem[];
}

export const isParentActive = (children: MenuItem[], path: string): boolean => {
    if (!children || !path) {
        return false;
    }
    return children.some((item) =>
        item.path?.split('/')[1] === path.split('/')[1]
            ? true
            : item.subMenu?.some((item2) => item2.path?.split('/')[1] === path.split('/')[1])
    );
};