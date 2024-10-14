import type { AboutPage } from './../../models/about.model';
import { getFormattedDataByLocale } from '~/utils/api.util';
import { data } from '../data/about';

export default defineEventHandler((event): AboutPage => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
