import type { PartnershipsPage } from '~/models/partnerships.model';

export const usePartnerships = () => {
  const { locale } = useI18n();

  const getPage = async () => {
    const { status, data } = await useAsyncData<PartnershipsPage>('partnerships', () =>
      $fetch('/api/partnerships', {
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
