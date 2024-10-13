import type { Location, Contact } from '~/models/contacts';

export const useContacts = () => {
  const { locale } = useI18n();

  const getContactsData = async (visibility?: {
    contacts_intro?: boolean;
    social_media?: boolean;
    footer?: boolean;
  }) => {
    const key = `contacts-${JSON.stringify(visibility)}`;

    const { status, data } = await useAsyncData<Contact[]>(key, () =>
      $fetch('/api/contacts/contacts', {
        query: {
          locale: locale.value,
          contacts_intro: visibility?.contacts_intro,
          social_media: visibility?.social_media,
          footer: visibility?.footer,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getLocationsData = async (options?: { idList?: number[] }) => {
    const { status, data } = await useAsyncData<Location[]>('locations', () =>
      $fetch('/api/contacts/locations', {
        query: {
          locale: locale.value,
          idList: options?.idList,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  return {
    getContactsData,
    getLocationsData,
  };
};
