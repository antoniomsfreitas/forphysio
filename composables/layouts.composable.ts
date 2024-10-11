import type { Layout } from '~/models/layout.model';

export const useLayout = () => {
  const { locale } = useI18n();

  const getLayoutData = async () => {
    const { status, data } = await useAsyncData<Layout>('page-layout', () =>
      $fetch('/api/layout', {
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
    getLayoutData,
  };
};
