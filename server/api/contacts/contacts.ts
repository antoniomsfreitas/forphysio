import { getFormattedDataByLocale } from '~/utils/api.util';
import type { Contact } from '~/models/contacts';
import { data } from '../../data/contacts/contacts';

const getContacts = (visibility?: { contacts_intro?: boolean; social_media?: boolean; footer?: boolean }) => {
  if (visibility?.contacts_intro) {
    return data.filter((contact) => contact.visibility.contacts_intro);
  }

  if (visibility?.social_media) {
    return data.filter((contact) => contact.visibility.social_media);
  }

  if (visibility?.footer) {
    return data.filter((contact) => contact.visibility.footer);
  }

  return data;
};

export default defineEventHandler((event): Contact[] => {
  const { locale, contacts_intro, social_media, footer } = getQuery(event);

  const data = getContacts({
    contacts_intro: contacts_intro as boolean,
    social_media: social_media as boolean,
    footer: footer as boolean,
  });

  return getFormattedDataByLocale(data, locale as string);
});
