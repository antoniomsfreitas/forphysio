import type { Service } from '~/models/services.model';

export const useServices = () => {
  const services: Service[] = [
    {
      id: 1,
      slug: 'fisioterapia-musculo-esqueletica',
      title: 'Fisioterapia Músculo Esquelética',
      image: 'service-1.jpg',
    },
    {
      id: 2,
      slug: 'fisioterapia-no-desporto',
      title: 'Fisioterapia no Desporto',
      image: 'service-4.jpg',
    },
    {
      id: 3,
      slug: 'fisioterapia-aquatica-e-hidroterapia',
      title: 'Fisioterapia Aquática e Hidroterapia',
      image: 'service-2.jpg',
    },
    {
      id: 4,
      slug: 'fisioterapia-no-envelhecimento',
      title: 'Fisioterapia no Envelhecimento',
      image: 'service-3.jpg',
    },
    {
      id: 5,
      slug: 'fisioterapia-online',
      title: 'Fisioterapia Online',
      image: 'service-5.jpg',
    },
    {
      id: 6,
      slug: 'fisioterapia-na-saude-da-mulher',
      title: 'Fisioterapia na Saúde da Mulher',
      image: 'service-5.jpg',
    },
    {
      id: 7,
      slug: 'pilates-clinico',
      title: 'Pilates Clínico',
      image: 'service-5.jpg',
    },
    {
      id: 8,
      slug: 'nutricao',
      title: 'Nutrição',
      image: 'service-5.jpg',
    },
    {
      id: 9,
      slug: 'saude-e-bem-estar',
      title: 'Saúde e Bem-estar',
      image: 'service-5.jpg',
    },
    {
      id: 10,
      slug: 'consultas-medicas',
      title: 'Consultas Médicas',
      image: 'service-5.jpg',
    },
  ];

  return {
    services,
  };
};
