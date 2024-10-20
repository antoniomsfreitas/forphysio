import type { Layout } from '~/models/layout.model';

const isHeaderVisible = ref(true);

export const useLayout = () => {
  const setHeaderVisibility = (isVisible: boolean) => {
    isHeaderVisible.value = isVisible;
  };

  const getLayoutData = async () => {
    const { status, data } = await useAsyncData<Layout>('page-layout', () => $fetch('/api/layout'));

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
