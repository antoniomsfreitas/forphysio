import type { ServiceList } from '~/models/services.model';
import { getFormattedDataByLocale } from '~/utils/api.util';
import { data as servicesData } from '../data/services';

const buildServiceListItem = (service: any): ServiceList => {
  return {
    id: service?.id,
    slug: service?.slug,
    title: service.title,
    image: service.image,
    locations: service.locations,
  };
};

const getServicesList = (isHomepageHighlight: boolean): ServiceList[] => {
  const data = isHomepageHighlight ? servicesData.filter((service) => service.homepage) : servicesData;

  return data.map((service) => buildServiceListItem(service));
};

export default defineEventHandler((event): ServiceList[] => {
  const { locale, isHomepageHighlight } = getQuery(event);

  const servicesListData = getServicesList(isHomepageHighlight as boolean);
  return getFormattedDataByLocale(servicesListData, locale as string);
});
