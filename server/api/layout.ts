import type { Layout } from '~/models/layout.model';
import { data as headerData } from '../data/layout/header';
import { data as footerData } from '../data/layout/footer';
import { getFormattedDataByLocale } from '~/utils/api.util';

export default defineEventHandler((event): Layout => {
  const { locale } = getQuery(event);

  const data = {
    header: headerData,
    footer: footerData,
  };

  return getFormattedDataByLocale(data, locale as string);
});
