import type { AboutPage } from '~/models/about.model';

export const useAboutPage = () => {
  const { locale } = useI18n();

  const getPage = async () => {
    const { status, data } = await useAsyncData<AboutPage>('about-page', () =>
      $fetch('/api/about', {
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
    getPage,
  };
};
