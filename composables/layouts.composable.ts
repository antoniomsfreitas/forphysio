import type { Layout } from '~/models/layout.model';

export const useLayout = () => {
  const getLayoutData = async () => {
    const { status, data } = await useAsyncData<Layout>('page-layout', () => $fetch('/api/layout'));

    return {
      status,
      data,
    };
  };

  return {
    getLayoutData,
  };
};
