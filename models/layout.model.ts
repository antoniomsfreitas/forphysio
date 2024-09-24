import type { Routes } from './routes.model';

interface HeaderSubmenuOption {
  name: string;
  route: Routes;
  viewAll?: boolean;
}

export interface HeaderMenuOption {
  name: string;
  route: Routes;
  submenu?: HeaderSubmenuOption[];
}

export interface HeaderMenu {
  mainMenu: HeaderMenuOption[];
  searchOption: HeaderMenuOption;
  buttonOption: HeaderMenuOption;
}

export interface Layout {
  header: HeaderMenu;
}
