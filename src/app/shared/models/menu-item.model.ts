/**
 * Represents header menu item
 */
export interface MenuItem {
    /** item's label */
    label: string;
    /** item's mat icon name */
    icon: string;
    /** item routerLink route */
    route: string;
    /** item routerLink queryParams */
    queryParam: any;
    /** mobile show flag */
    showOnMobile: boolean;
    /** tablet show flag */
    showOnTablet: boolean;
    /** desktop show flag */
    showOnDesktop: boolean;
}