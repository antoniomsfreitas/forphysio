import type { Page } from './../models/page.model';

export const usePrivacyPolicy = () => {
  const { locale } = useI18n();

  const getPage = async () => {
    const { status, data } = await useAsyncData<Page>('privacy-policy', () =>
      $fetch('/api/privacy-policy', {
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
