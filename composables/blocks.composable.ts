export const useBlocks = () => {
  const { locale } = useI18n();

  const getHomepageBlocksData = async () => {
    const { status, data } = await useAsyncData('homepage-blocks', () =>
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
