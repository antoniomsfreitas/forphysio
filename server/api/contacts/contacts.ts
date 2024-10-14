import { getFormattedDataByLocale } from '~/utils/api.util';
import type { Contact } from '~/models/contacts';
import { data } from '../../data/contacts/contacts';

const getContacts = (visibility?: { contactsIntro?: boolean; socialMedia?: boolean; footer?: boolean }) => {
  if (visibility?.contactsIntro) {
    return data.filter((contact) => contact.visibility.contactsIntro);
  }

  if (visibility?.socialMedia) {
    return data.filter((contact) => contact.visibility.socialMedia);
  }

  if (visibility?.footer) {
    return data.filter((contact) => contact.visibility.footer);
  }

  return data;
};

export default defineEventHandler((event): Contact[] => {
  const { locale, contactsIntro, socialMedia, footer } = getQuery(event);

  const data = getContacts({
    contactsIntro: contactsIntro as boolean,
    socialMedia: socialMedia as boolean,
    footer: footer as boolean,
  });

  return getFormattedDataByLocale(data, locale as string);
});
