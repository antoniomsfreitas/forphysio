import type { Layout } from '~/models/layout.model';

const isHeaderVisible = ref(true);

export const useLayout = () => {
  const setHeaderVisibility = (isVisible: boolean) => {
    isHeaderVisible.value = isVisible;
  };

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
    isHeaderVisible,
    setHeaderVisibility,
  };
};
