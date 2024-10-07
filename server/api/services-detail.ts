import type { Service } from '~/models/services.model';
import { getFormattedDataByLocale } from '~/utils/api.util';
import { data as servicesData } from '../data/services';

const getServiceDetailBySlug = (serviceSlug: string, locale: string): Service | undefined => {
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

  return getFormattedDataByLocale(serviceDetailData, locale as string);
});
