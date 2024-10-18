import type { Routes } from './routes.model';

interface HeaderSubmenuOption {
  name: string;
  route: {
    name: Routes;
    slug?: string;
  };

  viewAll?: boolean;
}

export interface HeaderMenuOption {
  name: string;
  route: {
    name: Routes;
    params?: Object;
  };
  submenu?: HeaderSubmenuOption[];
}

export interface HeaderMenu {
  mainMenu: HeaderMenuOption[];
  searchOption: HeaderMenuOption;
  buttonOption: HeaderMenuOption;
}

export interface FooterMenuOption {
  name: string;
  route: {
    name: Routes;
    params?: Object;
  };
}

export interface FooterLogosMenuOption {
  name: string;
  link: string;
  image: string;
}

export interface FooterMenu {
  mainMenu: FooterMenuOption[];
  logosMenu: FooterLogosMenuOption[];
}

export interface Layout {
  header: HeaderMenu;
  footer: FooterMenu;
}
