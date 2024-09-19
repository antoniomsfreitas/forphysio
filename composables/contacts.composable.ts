export const useContacts = () => {
  const contacts = {
    locations: [
      {
        name: 'Marinha Grande',
        address: 'R. Alexandre Herculano 14\nR/C Loja 2, 2430-271',
        phone: '+351 910 701 211',
        hours: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 09h00-13h00\n<b>Dom:</b> Encerrado',
      },
      {
        name: 'Caldas da Rainha',
        address: 'Av. Timor Lorosae\n2500-753',
        phone: ' +351 918 078 788',
        hours: '<b>Seg-Sáb:</b> 08h00-22h00\n<b>Dom:</b> Encerrado',
      },
      {
        name: 'Caldas da Rainha',
        address: 'R. do Funchal 39\n2500-178',
        phone: '+351 918 078 788',
        hours: '<b>Seg e Sex:</b> 09h00-13h00\n<b>Ter e Qui:</b> 14h00-20h00\n<b>Qua e Dom:</b> Encerrado',
      },
      {
        name: 'Lisboa - Lumiar',
        address: 'R. Amílcar Cabral 40 B\n1750-020',
        phone: '+351 918 078 788',
        hours: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 09h00-13h00\n<b>Dom:</b> Encerrado',
      },
      {
        name: 'Oeiras',
        address: 'R. Sacadura Cabral 65a\n1495-207 Cruz Quebrada',
        phone: '+351 918 078 788',
        hours: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 08h00-13h00\n<b>Dom:</b> Encerrado',
      },
    ],
    social: {
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
    },
  };

  const locations = computed(() => contacts.locations);

  const social = computed(() => contacts.social);

  return {
    locations,
    social,
  };
};
