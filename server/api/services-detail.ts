import type { Service } from '~/models/services.model';
import { getFormattedDataByLocale } from '~/utils/api.util';
import { data as servicesData } from '../data/services';
import { LocationsList, data as locationsData } from '../data/contacts/locations';

const getLocations = (ids: LocationsList[]) => {
  return locationsData.filter((location) => ids.includes(location.id));
};

const getServiceDetailBySlug = (serviceSlug: string, locale: string) => {
  return servicesData.find((service) => {
    const translatedServiceSlug = getFormattedDataByLocale(service.slug, locale);

    return translatedServiceSlug === serviceSlug;
  });
};

export default defineEventHandler((event): Service => {
  const { locale, slug } = getQuery(event);

  // tries to get the service detail from the list of services
  const serviceDetailData = getServiceDetailBySlug(slug as string, locale as string);

  // service not found, returns not found error
  if (!serviceDetailData) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Error: No data found for this service slug!',
    });
  }

  const service = {
    ...serviceDetailData,
    locations: serviceDetailData?.locationsId ? getLocations(serviceDetailData.locationsId) : null,
  };

  return getFormattedDataByLocale(service, locale as string);
});
