import { Routes } from '~/models/routes.model';
import { data as servicesData, ServicesList } from '../services';

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
          route: {
            name: Routes.SERVICES_SLUG,
            slug: getServiceSlugById(ServicesList.FISIOTERAPIA_MUSCULO_ESQUELETICA),
          },
        },
        {
          name: 'pages.services.sportsPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.FISIOTERAPIA_DESPORTO) },
        },
        {
          name: 'pages.services.aquaticPhysiotherapyHydrotherapy',
          route: {
            name: Routes.SERVICES_SLUG,
            slug: getServiceSlugById(ServicesList.FISIOTERAPIA_AQUATICA_HIDROTERAPIA),
          },
        },
        {
          name: 'pages.services.ageingPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.FISIOTERAPIA_ENVELHECIMENTO) },
        },
        {
          name: 'pages.services.onlinePhysioterapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.FISIOTERAPIA_ONLINE) },
        },
        {
          name: 'pages.services.womenHealthPhysiotherapy',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.FISIOTERAPIA_PELVICA) },
        },
        {
          name: 'pages.services.clinicalPilates',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.PILATES_CLINICO) },
        },
        {
          name: 'pages.services.nutrition',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.NUTRICAO) },
        },
        {
          name: 'pages.services.healthWellBeing',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.SAUDE_BEM_ESTAR) },
        },
        {
          name: 'pages.services.medicalAppointments',
          route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(ServicesList.CONSULTAS_MEDICAS) },
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
  buttonOption: {
    name: 'general.bookAppointment',
    route: { name: Routes.CONTACTS },
  },
};
