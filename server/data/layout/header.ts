import { Routes } from '~/models/routes.model';
import { data as servicesData } from '../services';

const getServiceSlugById = (id: number) => {
  const service = servicesData.find((service) => {
    return service.id === id;
  });

  return service?.slug;
};

export const data = {
  mainMenu: [
    {
      name: 'pages.about',
      route: { name: Routes.ABOUT },
      submenu: [],
    },
    {
      name: 'pages.team',
      route: { name: Routes.TEAM },
      submenu: [],
    },
    {
      name: 'pages.services',
      route: { name: Routes.SERVICES },
      submenu: [
        { name: 'general.viewAll', route: { name: Routes.SERVICES }, viewAll: true },
        {
          name: 'pages.services.musculoskeletalPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(1) },
        },
        {
          name: 'pages.services.sportsPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(2) },
        },
        {
          name: 'pages.services.aquaticPhysiotherapyHydrotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(3) },
        },
        {
          name: 'pages.services.ageingPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(4) },
        },
        {
          name: 'pages.services.onlinePhysioterapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(5) },
        },
        {
          name: 'pages.services.womenHealthPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(6) },
        },
        {
          name: 'pages.services.clinicalPilates',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(7) },
        },
        {
          name: 'pages.services.nutrition',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(8) },
        },
        {
          name: 'pages.services.healthWellBeing',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(9) },
        },
        {
          name: 'pages.services.medicalAppointments',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(10) },
        },
      ],
    },
    {
      name: 'pages.partnerships',
      route: { name: Routes.PARTNERSHIPS },
      submenu: [],
    },
    {
      name: 'pages.blog',
      route: { name: Routes.BLOG },
      submenu: [],
    },
    {
      name: 'pages.contacts',
      route: { name: Routes.CONTACTS },
      submenu: [],
    },
  ],
  searchOption: {
    name: 'pages.search',
    route: { name: Routes.SEARCH },
  },
  buttonOption: {
    name: 'general.bookAppointment',
    route: { name: Routes.CONTACTS },
  },
};
