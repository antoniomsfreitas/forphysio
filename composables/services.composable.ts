import type { Service } from '~/models/services.model';

export const useServices = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Fisioterapia Músculo Esquelética',
    },
    {
      id: 2,
      title: 'Fisioterapia No Desporto',
    },
    {
      id: 3,
      title: 'Fisioterapia Aquática e Hidroterapia',
    },
    {
      id: 4,
      title: 'Fisioterapia no Envelhecimento',
    },
    {
      id: 5,
      title: 'Fisioterapia Online',
    },
    {
      id: 6,
      title: 'Fisioterapia na Saúde da Mulher',
    },
    {
      id: 7,
      title: 'Pilates Clínico',
    },
    {
      id: 8,
      title: 'Nutrição',
    },
    {
      id: 9,
      title: 'Saúde e Bem-estar',
    },
    {
      id: 10,
      title: 'Consultas Médicas',
    },
  ];

  return {
    services,
  };
};
