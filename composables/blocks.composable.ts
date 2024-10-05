import type { HomepageBlocks } from '~/models/blocks/homepage-blocks.model';

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

  return {
    getHomepageBlocksData,
  };
};
