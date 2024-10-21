import { getFormattedDataByLocale } from '~/utils/api.util';
import type { Faq } from '~/models/faq.model';
import { data } from '../data/privacy-policy';

export default defineEventHandler((event): Faq[] => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
