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
    contacts_intro: boolean;
    social_media: boolean;
    footer: boolean;
  };
}
