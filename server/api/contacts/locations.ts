import { getFormattedDataByLocale } from '~/utils/api.util';
import type { Location } from '~/models/contacts';
import { data } from '../../data/contacts/locations';

export default defineEventHandler((event): Location[] => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
