import type { Faq } from './../models/faq.model';

export const useFAQs = () => {
  const { locale } = useI18n();

  const getFAQs = async () => {
    const { status, data } = await useAsyncData<Faq[]>('faq', () =>
      $fetch('/api/faq', {
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
    getFAQs,
  };
};
