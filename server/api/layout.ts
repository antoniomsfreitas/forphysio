import { Routes } from '~/models/routes.model';

export default defineEventHandler(() => {
  return {
    header: {
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
            { name: 'general.viewAll', route: Routes.HOMEPAGE, viewAll: true },
            { name: 'pages.services.musculoskeletalPhysiotherapy', route: Routes.HOMEPAGE },
            { name: 'pages.services.sportsPhysiotherapy', route: Routes.HOMEPAGE },
            { name: 'pages.services.aquaticPhysiotherapyHydrotherapy', route: Routes.HOMEPAGE },
            { name: 'pages.services.ageingPhysiotherapy', route: Routes.HOMEPAGE },
            { name: 'pages.services.onlinePhysioterapy', route: Routes.HOMEPAGE },
            { name: 'pages.services.womenHealthPhysiotherapy', route: Routes.HOMEPAGE },
            { name: 'pages.services.clinicalPilates', route: Routes.HOMEPAGE },
            { name: 'pages.services.nutrition', route: Routes.HOMEPAGE },
            { name: 'pages.services.healthWellBeing', route: Routes.HOMEPAGE },
            { name: 'pages.services.medicalAppointments', route: Routes.HOMEPAGE },
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
        name: 'pages.search',
        route: Routes.SEARCH,
      },
      buttonOption: {
        name: 'general.bookAppointment',
        route: Routes.CONTACTS,
      },
    },
  };
});
