import type { HomepageBlocks } from '~/models/blocks/homepage-blocks.model';
import { getFormattedDataByLocale } from '~/utils/api.util';
import { data as aboutBlockData } from './about-us-block';
import { data as customersReviewsBlockData } from './customers-reviews-block';
import { data as heroBannerData } from './hero-banner';
import { data as newsletterBlockData } from './newsletter-block';
import { data as twoImagesBlockData } from './two-images-block';

export default defineEventHandler((event): HomepageBlocks => {
  const { locale } = getQuery(event);

  const data = {
    heroBannerBlock: heroBannerData,
    aboutUsBlock: aboutBlockData,
    twoImagesBlock: twoImagesBlockData,
    customersReviewsBlock: customersReviewsBlockData,
    newsletterBlock: newsletterBlockData,
  };

  return getFormattedDataByLocale(data, locale as string);
});
