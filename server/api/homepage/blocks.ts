import { data as heroBannerData } from './hero-banner';
import { data as aboutBlockData } from './about-us-block';
import { getFormattedDataByLocale } from '~/utils/api.util';

export default defineEventHandler((event) => {
  const { locale } = getQuery(event);

  const data = {
    'hero-banner': heroBannerData,
    'about-us-block': aboutBlockData,
  };

  return getFormattedDataByLocale(data, locale as string);
});
