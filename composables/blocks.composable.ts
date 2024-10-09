import type { HomepageBlocks } from '~/models/blocks/homepage-blocks.model';
import type { NewsletterBlock } from '~/models/blocks/newsletter-block';

export const useHomepageBlocks = () => {
  const { locale } = useI18n();

  const getHomepageBlocksData = async () => {
    const { status, data } = await useAsyncData<HomepageBlocks>('homepage-blocks', () =>
      $fetch('/api/homepage/blocks', {
        query: {
          locale: locale.value,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getNewsletterBlockData = async () => {
    const { status, data } = await useAsyncData<NewsletterBlock>('newsletter-block', () =>
      $fetch('/api/homepage/newsletter-block', {
        query: {
          locale: locale.value,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  return {
    getHomepageBlocksData,
    getNewsletterBlockData,
  };
};
