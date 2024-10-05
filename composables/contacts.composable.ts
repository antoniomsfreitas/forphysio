import type { ClinicLocation } from '~/models/contacts';

export const useContacts = () => {
  const locations: ClinicLocation[] = [
    {
      id: 1,
      name: 'Marinha Grande',
      address: 'R. Alexandre Herculano 14\nR/C Loja 2, 2430-271',
      phone: '+351 910 701 211',
      hours: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 09h00-13h00\n<b>Dom:</b> Encerrado',
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20marinha%20grande+(Forphysio%20%7C%20Marinha%20Grande)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
      visible: true,
    },
    {
      id: 2,
      name: 'Caldas da Rainha',
      address: 'Av. Timor Lorosae\n2500-753',
      phone: ' +351 918 078 788',
      hours: '<b>Seg-Sáb:</b> 08h00-22h00\n<b>Dom:</b> Encerrado',
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20caldas%20da%20rainha+(Forphysio%20%7C%20Caldas%20da%20Rainha)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
      visible: true,
    },
    {
      id: 3,
      name: 'Caldas da Rainha',
      address: 'R. do Funchal 39\n2500-178',
      phone: '+351 918 078 788',
      hours: '<b>Seg e Sex:</b> 09h00-13h00\n<b>Ter e Qui:</b> 14h00-20h00\n<b>Qua e Dom:</b> Encerrado',
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20caldas%20da%20rainha+(Forphysio%20%7C%20Caldas%20da%20Rainha)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
      visible: false,
    },
    {
      id: 4,
      name: 'Lisboa - Lumiar',
      address: 'R. Amílcar Cabral 40 B\n1750-020',
      phone: '+351 918 078 788',
      hours: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 09h00-13h00\n<b>Dom:</b> Encerrado',
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20lumiar+(Forphysio%20%7C%20Lumiar)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
      visible: true,
    },
    {
      id: 5,
      name: 'Oeiras',
      address: 'R. Sacadura Cabral 65a\n1495-207 Cruz Quebrada',
      phone: '+351 918 078 788',
      hours: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 08h00-13h00\n<b>Dom:</b> Encerrado',
      googleMapsSrc:
        'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20R.%20Sacadura%20Cabral%2065a,%201495-207%20Cruz%20Quebrada+(Forphysio%20%7C%20Oeiras)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
      visible: true,
    },
  ];

  const social = {
    facebook: {
      name: 'Facebook',
      value: 'https://www.facebook.com/forphysio',
      icon: 'facebook',
    },
    instagram: {
      name: 'Instagram',
      value: 'https://www.instagram.com/forphysio/',
      icon: 'instagram',
    },
    whatsapp: {
      name: 'Whatsapp',
      value: '+351 917 730 222',
      icon: 'whatsapp',
    },
    youtube: {
      name: 'Youtube',
      value: 'https://www.youtube.com/@forphysio6999',
      icon: 'youtube',
    },
    email: {
      name: 'E-mail',
      value: 'geral@forphysio.pt',
      icon: 'email',
    },
  };

  const getLocations = (id?: number): ClinicLocation | ClinicLocation[] | undefined => {
    if (id) {
      return locations.find((location) => location.id == id);
    }

    return locations;
  };

  const getVisibleLocations = (): ClinicLocation[] => {
    return locations.filter((location) => location.visible == true);
  };

  return {
    getLocations,
    getVisibleLocations,
    locations,
    social,
  };
};
