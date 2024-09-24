import { getFormattedDataByLocale } from '~/utils/api.util';
import type { TwoImagesBlock } from '~/models/blocks/two-images-block.model';
import { Routes } from '~/models/routes.model';

export const data = {
  highlights: [
    {
      id: 1,
      title: {
        translations: {
          pt: 'A nossa equipa',
          en: 'Our team',
          es: 'Nuestro equipo',
          'zh-sg': '我們的團隊',
        },
      },
      description: {
        translations: {
          pt: 'Conheça os nossos profissionais especializados e motivados.',
          en: 'Meet our specialised and motivated professionals.',
          es: 'Conozca a nuestros profesionales especializados y motivados.',
          'zh-sg': '認識我們專業且積極的專業人員。',
        },
      },
      cta: {
        link: Routes.TEAM,
        label: {
          translations: {
            pt: 'Saber mais',
            en: 'Find out more',
            es: 'Más información',
            'zh-sg': '瞭解更多',
          },
        },
      },
      image: {
        alt: {
          translations: {
            pt: 'Equipa da ForPhysio sentada a ouvir uma palestra',
            en: 'ForPhysio team sitting listening to a lecture',
            es: 'Para el equipo de fisioterapia sentado escuchando una conferencia',
            'zh-sg': '物理治療團隊聆聽講座',
          },
        },
        mobile: '/images/homepage/two-images-block/image-1/image-1-mobile.jpg',
        tablet: '/images/homepage/two-images-block/image-1/image-1-tablet.jpg',
        desktop: '/images/homepage/two-images-block/image-1/image-1-desktop.jpg',
      },
    },
    {
      id: 2,
      title: {
        translations: {
          pt: 'Serviços de fisioterapia',
          en: 'Physiotherapy services',
          es: 'Servicios de fisioterapia',
          'zh-sg': '物理治療服務',
        },
      },
      description: {
        translations: {
          pt: 'Tratamento especializado e individualizado.',
          en: 'Specialised and personalised treatment.',
          es: 'Trato especializado y personalizado.',
          'zh-sg': '專業且個人化的治療。',
        },
      },
      cta: {
        link: Routes.CONTACTS,
        label: {
          translations: {
            pt: 'Marcar consulta',
            en: 'Book appointment',
            es: 'Marcar consulta',
            'zh-sg': '預約',
          },
        },
      },
      image: {
        alt: {
          translations: {
            pt: 'Equipa da ForPhysio reunida em um momento descontraído',
            en: 'ForPhysio team at a relaxed moment',
            es: 'El equipo de ForPhysio en un momento relajado',
            'zh-sg': '放鬆時的物理治療團隊',
          },
        },
        mobile: '/images/homepage/two-images-block/image-2/image-2-mobile.jpg',
        tablet: '/images/homepage/two-images-block/image-2/image-2-tablet.jpg',
        desktop: '/images/homepage/two-images-block/image-2/image-2-desktop.jpg',
      },
    },
  ],
};

export default defineEventHandler((event): TwoImagesBlock => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
