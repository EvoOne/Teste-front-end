export interface MenuItem {
  title: string;
  iconCssClass: string;
	route: string;
}

export interface Menu {
  items: MenuItem[];
}
