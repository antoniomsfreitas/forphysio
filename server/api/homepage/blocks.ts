import { data as heroBannerData } from './hero-banner';
import { data as aboutBlockData } from './about-us-block';
import { getFormattedDataByLocale } from '~/utils/api.util';
import type { HomepageBlocks } from '~/models/blocks/blocks.model';

export default defineEventHandler((event): HomepageBlocks => {
  const { locale } = getQuery(event);

  const data = {
    'hero-banner': heroBannerData,
    'about-us-block': aboutBlockData,
  };

  return getFormattedDataByLocale(data, locale as string);
});
