export interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  googleMapsSrc: string;
}

export interface Contact {
  id: number;
  name: string;
  value?: string;
  link: string;
  icon: string;
  visibility: {
    contactsIntro: boolean;
    socialMedia: boolean;
    footer: boolean;
  };
}
