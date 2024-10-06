import { getFormattedDataByLocale } from '~/utils/api.util';
import { data as pageBlocks } from './blocks';
import { PartnershipsPage } from '~/models/partnerships.model';
import { data as partners } from './partners';

export default defineEventHandler((event): PartnershipsPage => {
  const { locale } = getQuery(event);

  const data = {
    pageBlocks: pageBlocks,
    partners: partners,
  };

  return getFormattedDataByLocale(data, locale as string);
});
