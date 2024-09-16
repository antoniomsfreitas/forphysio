export const useLayout = () => {
  const getLayoutData = async () => {
    const { status, data } = await useAsyncData('page-layout', () => $fetch('/api/layout'));

    return {
      status,
      data,
    };
  };

  return {
    getLayoutData,
  };
};
