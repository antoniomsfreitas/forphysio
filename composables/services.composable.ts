import type { Service, ServiceList } from '~/models/services.model';

export const useServices = () => {
  const { locale } = useI18n();

  const getServicesListData = async (isHomepageHighlight?: boolean) => {
    const { status, data } = await useAsyncData<ServiceList[]>('services-list', () =>
      $fetch('/api/services-list', {
        query: {
          locale: locale.value,
          isHomepageHighlight,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getServiceDetailDataBySlug = async (slug: string) => {
    const { status, data } = await useAsyncData<Service>('services-detail', () =>
      $fetch('/api/services-detail', {
        query: {
          locale: locale.value,
          slug,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  return {
    getServicesListData,
    getServiceDetailDataBySlug,
  };
};
