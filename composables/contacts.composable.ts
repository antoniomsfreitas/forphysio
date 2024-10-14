import type { Location, Contact } from '~/models/contacts';

export const useContacts = () => {
  const { locale } = useI18n();

  const getContactsData = async (visibility?: { contactsIntro?: boolean; socialMedia?: boolean; footer?: boolean }) => {
    const key = `contacts-${JSON.stringify(visibility)}`;

    const { status, data } = await useAsyncData<Contact[]>(key, () =>
      $fetch('/api/contacts/contacts', {
        query: {
          locale: locale.value,
          contactsIntro: visibility?.contactsIntro,
          socialMedia: visibility?.socialMedia,
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
