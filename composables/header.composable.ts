import { Routes } from '~/models/routes.model';

export const useHeader = () => {
  const headerMenu = {
    mainMenu: [
      {
        name: 'pages.about',
        route: Routes.ABOUT,
        submenu: [],
      },
      {
        name: 'pages.team',
        route: Routes.TEAM,
        submenu: [],
      },
      {
        name: 'pages.services',
        route: Routes.SERVICES,
        submenu: [
          { name: 'Ver todos', route: Routes.HOMEPAGE, viewAll: true },
          { name: 'Fisioterapia músculo esquelética', route: Routes.HOMEPAGE },
          { name: 'Fisioterapia no desporto', route: Routes.HOMEPAGE },
          { name: 'Fisioterapia aquática e hidroterapia', route: Routes.HOMEPAGE },
          { name: 'Fisioterapia no envelhecimento', route: Routes.HOMEPAGE },
          { name: 'Fisioterapia online', route: Routes.HOMEPAGE },
          { name: 'Fisioterapia na saúde da mulher', route: Routes.HOMEPAGE },
          { name: 'Pilates clínico', route: Routes.HOMEPAGE },
          { name: 'Nutrição', route: Routes.HOMEPAGE },
          { name: 'Saúde e bem-estar', route: Routes.HOMEPAGE },
          { name: 'Consultas médicas', route: Routes.HOMEPAGE },
        ],
      },
      {
        name: 'pages.partnerships',
        route: Routes.PARTNERSHIPS,
        submenu: [],
      },
      {
        name: 'pages.blog',
        route: Routes.BLOG,
        submenu: [],
      },
      {
        name: 'pages.contacts',
        route: Routes.CONTACTS,
        submenu: [],
      },
    ],
    searchOption: {
      name: 'Pesquisa',
      route: Routes.SEARCH,
    },
    buttonOption: {
      name: 'Marcar consulta',
      route: Routes.CONTACTS,
    },
  };

  const mainMenu = computed(() => headerMenu?.mainMenu);

  const searchOption = computed(() => headerMenu?.searchOption);

  const buttonOption = computed(() => headerMenu?.buttonOption);

  return {
    mainMenu,
    searchOption,
    buttonOption,
  };
};
