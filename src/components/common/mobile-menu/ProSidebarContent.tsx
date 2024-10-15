import mobileMenuItems from "../../../data/mobileMenuItems";
import { isParentActive } from "../../../utilis/isMenuActive";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

interface MenuItem {
    label?: string;
    title?: string;
    path?: string;
    subMenu?: MenuItem[];
}

const hasPath = (item: MenuItem): item is MenuItem & { path: string } => {
    return typeof item.path === "string";
};

const hasSubMenu = (item: MenuItem): item is MenuItem & { subMenu: MenuItem[] } => {
    return Array.isArray(item.subMenu);
};

const getMenuItemLabel = (item: MenuItem): string => {
    return item.label || item.title || '';
};

const ProSidebarContent = () => {
    const path = usePathname();

    return (
        <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
            <Menu>
                {mobileMenuItems.map((item: any, index) => (
                    hasSubMenu(item) ? (
                        <SubMenu
                            key={index}
                            className={isParentActive(item.subMenu, path) ? "active" : ""}
                            label={getMenuItemLabel(item)}
                        >
                            {item.subMenu.map((subItem, subIndex) =>
                                hasSubMenu(subItem) ? (
                                    <SubMenu
                                        key={subIndex}
                                        label={getMenuItemLabel(subItem)}
                                        className={isParentActive(subItem.subMenu, path) ? "active" : ""}
                                    >
                                        {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                            hasPath(nestedItem) ? (
                                                <MenuItem
                                                    key={nestedIndex}
                                                    component={
                                                        <Link
                                                            className={nestedItem.path === path ? "active" : ""}
                                                            href={nestedItem.path}
                                                        />
                                                    }
                                                >
                                                    {getMenuItemLabel(nestedItem)}
                                                </MenuItem>
                                            ) : null
                                        ))}
                                    </SubMenu>
                                ) : hasPath(subItem) ? (
                                    <MenuItem
                                        key={subIndex}
                                        component={
                                            <Link
                                                className={subItem.path === path ? "active" : ""}
                                                href={subItem.path}
                                            />
                                        }
                                    >
                                        {getMenuItemLabel(subItem)}
                                    </MenuItem>
                                ) : null
                            )}
                        </SubMenu>
                    ) : hasPath(item) ? (
                        <MenuItem
                            key={index}
                            component={
                                <Link
                                    className={item.path === path ? "active" : ""}
                                    href={item.path}
                                />
                            }
                        >
                            {getMenuItemLabel(item)}
                        </MenuItem>
                    ) : null
                ))}
            </Menu>
        </Sidebar>
    );
};

export default ProSidebarContent;