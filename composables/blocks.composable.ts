export const useBlocks = () => {
  const { locale } = useI18n();

  const getHeroBannerData = async () => {
    const { status, data } = await useAsyncData('hero-banner', () =>
      $fetch('/api/homepage/hero-banner', {
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
    getHeroBannerData,
  };
};
