import type { Layout } from '~/models/layout.model';
import { Routes } from '~/models/routes.model';
import { data as servicesData } from '../data/services';
import { getFormattedDataByLocale } from '~/utils/api.util';

const getServiceSlugById = (locale: string, id: number) => {
  const service = servicesData.find((service) => {
    return service.id === id;
  });

  return getFormattedDataByLocale(service?.slug, locale);
};

export default defineEventHandler((event): Layout => {
  const { locale } = getQuery(event);

  return {
    header: {
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
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 1) },
            },
            {
              name: 'pages.services.sportsPhysiotherapy',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 2) },
            },
            {
              name: 'pages.services.aquaticPhysiotherapyHydrotherapy',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 3) },
            },
            {
              name: 'pages.services.ageingPhysiotherapy',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 4) },
            },
            {
              name: 'pages.services.onlinePhysioterapy',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 5) },
            },
            {
              name: 'pages.services.womenHealthPhysiotherapy',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 6) },
            },
            {
              name: 'pages.services.clinicalPilates',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 7) },
            },
            {
              name: 'pages.services.nutrition',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 8) },
            },
            {
              name: 'pages.services.healthWellBeing',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 9) },
            },
            {
              name: 'pages.services.medicalAppointments',
              route: { name: Routes.SERVICES_SLUG, slug: getServiceSlugById(locale as string, 10) },
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
    },
  };
});
