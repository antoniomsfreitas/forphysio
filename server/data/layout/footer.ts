import { Routes } from '~/models/routes.model';

export const data = {
  mainMenu: [
    {
      name: 'pages.services',
      route: { name: Routes.SERVICES },
    },
    {
      name: 'pages.about',
      route: { name: Routes.ABOUT },
    },
    {
      name: 'pages.team',
      route: { name: Routes.TEAM },
    },
    {
      name: 'pages.partnerships',
      route: { name: Routes.PARTNERSHIPS },
    },
    {
      name: 'pages.blog',
      route: { name: Routes.BLOG },
    },
    {
      name: 'pages.contacts',
      route: { name: Routes.CONTACTS },
    },
    {
      name: 'pages.privacy-policy',
      route: { name: Routes.PRIVACY_POLICY },
    },
    {
      name: 'pages.faqs',
      route: { name: Routes.FAQ },
    },
  ],

  logosMenu: [
    {
      name: 'general.complaintsBook',
      link: 'https://www.livroreclamacoes.pt/Inicio/',
      image: 'livro_reclamacoes.svg',
    },
    {
      name: 'general.complimentsBook',
      link: 'https://livrodeelogios.com/',
      image: 'livro_elogios.svg',
    },
  ],
};
