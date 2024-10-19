export enum LocationsList {
  MARINHA_GRANDE = 1,
  CALDAS_RAINHA = 2,
  LISBOA_LUMIAR = 3,
  OEIRAS = 4,
  AVEIRO = 5,
}

export const data = [
  {
    id: 1,
    name: 'Marinha Grande',
    address: 'R. Alexandre Herculano 14\nR/C Loja 2, 2430-271',
    phone: '+351 910 701 211',
    hours: {
      translations: {
        pt: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 09h00-13h00\n<b>Dom:</b> Encerrado',
        en: '<b>Mon-Fri:</b> 08:00-21:00\n<b>Sat:</b> 09:00-13:00\n<b>Sun:</b> Closed',
        es: '<b>Lunes a viernes:</b> 08:00-21:00\n<b>Sabado:</b> 09:00-13:00\n<b>Dom:</b> Cerrado',
        'zh-sg': '<b>週一至週五：</b> 08:00-21:00\n<b>週六：</b> 09:00-13:00\n<b>週日：</b > 休息',
      },
    },
    googleMapsSrc:
      'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20marinha%20grande+(Forphysio%20%7C%20Marinha%20Grande)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
  },
  {
    id: 2,
    name: 'Caldas da Rainha',
    address: 'Rua do Funchal 39, 2500-178',
    phone: ' +351 918 078 788',
    hours: {
      translations: {
        pt: '<b>Seg e Sex:</b> 09h00-13h00\n<b>Ter e Qui:</b> 14h00-20h00\n<b>Qua e Dom:</b> Encerrado',
        en: '<b>Mon and Fri:</b> 09:00-13:00\n<b>Tue and Thu:</b> 14:00-20:00\n<span class="highlight" >Wed and Sun:</b> Closed',
        es: '<b>Lunes y viernes:</b> 09:00-13:00\n<b>Martes y jueves:</b> 14:00-20:00 n<span class="highlight" >Miércoles y domingos:</b> cerrado',
        'zh-sg':
          '<b>週一和週五：</b> 09:00-13:00\n<b>週二和週四：</b> 14:00-20: 00\n<span class="highlight" >週三和週日：</b> 休息',
      },
    },
    googleMapsSrc:
      'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20caldas%20da%20rainha+(Forphysio%20%7C%20Caldas%20da%20Rainha)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
  },
  {
    id: 3,
    name: 'Lisboa - Lumiar',
    address: 'R. do Funchal 39\n2500-178',
    phone: '+351 918 078 788',
    hours: {
      translations: {
        pt: '<b>Seg e Sex:</b> 09h00-13h00\n<b>Ter e Qui:</b> 14h00-20h00\n<b>Qua e Dom:</b> Encerrado',
        en: '<b>Mon and Fri:</b> 09:00-13:00\n<b>Tue and Thu:</b> 14:00-20:00\n<b>Wed and Sun:</b> Closed',
        es: '<b>Lunes y viernes:</b> 09:00-13:00\n<b>Martes y jueves:</b> 14:00-20:00\n<b>Miércoles y domingos:</ b>Cerrado',
        'zh-sg': '<b>週一和週五：</b> 09:00-13:00\n<b>週二和週四：</b> 14:00-20:00\n<b>週三和週日：</ b> 關閉',
      },
    },
    googleMapsSrc:
      'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20caldas%20da%20rainha+(Forphysio%20%7C%20Caldas%20da%20Rainha)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
  },
  {
    id: 4,
    name: 'Oeiras',
    address: 'R. Sacadura Cabral 65a\n1495-207 Cruz Quebrada',
    phone: '+351 918 078 788',
    hours: {
      translations: {
        pt: '<b>Seg-Sex:</b> 08h00-21h00\n<b>Sáb:</b> 08h00-13h00\n<b>Dom:</b> Encerrado',
        en: '<b>Mon-Fri:</b> 08:00-21:00\n<b>Sat:</b> 08:00-13:00\n<b>Sun:</b> Closed',
        es: '<b>Lunes a viernes:</b> 08:00-21:00\n<b>Sabado:</b> 08:00-13:00\n<b>Dom:</b> Cerrado',
        'zh-sg': '<b>週一至週五：</b> 08:00-21:00\n<b>週六：</b> 08:00-13:00\n<b>週日：</b > 休息',
      },
    },
    googleMapsSrc:
      'https://maps.google.com/maps?width=100%25&height=470&hl=en&q=Forphysio%20R.%20Sacadura%20Cabral%2065a,%201495-207%20Cruz%20Quebrada+(Forphysio%20%7C%20Oeiras)&t=&z=14&ie=UTF8&iwloc=B&output=embed',
  },
  {
    id: 5,
    name: 'Aveiro',
    address: 'R. do Funchal 39, 2500-178',
    phone: '+351 917 730 222',
    hours: {
      translations: {
        pt: '<b>Seg-Sex:</b> 08h00-18h00\n<b>Sáb-Dom:</b> Encerrado',
        en: '<b>Mon-Fri:</b> 08:00-18:00\n<b>Sat-Sun:</b> Closed',
        es: '<b>Lun-Vie:</b> 08:00-18:00\n<b>Sáb-Dom:</b> Cerrado',
        'zh-sg': '<b>周一至周五:</b> 08:00-18:00\n<b>周六至周日:</b> 休息',
      },
    },
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.9595886582088!2d-8.649838023534128!3d40.60871524393154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a3e9e679389f%3A0x6a4af0ecf5e3f523!2sForPhysio%20Aveiro!5e0!3m2!1spt-PT!2spt!4v1729356776084!5m2!1spt-PT!2spt',
  },
];
