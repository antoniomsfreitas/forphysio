import { Routes } from '~/models/routes.model';
import { getDataByLocale } from '~/utils/api.util';

export default defineEventHandler((event) => {
  const { locale } = getQuery(event);

  const data = {
    info: {
      title: {
        translations: {
          pt: 'Exercício • Fisioterapia • Bem-Estar',
          en: 'Exercise • Physiotherapy • Wellness',
          es: 'Ejercicio • Fisioterapia • Bienestar.',
          'zh-sg': '運動 • 物理治療 • 健康',
        },
      },
      btn: {
        label: {
          translations: {
            pt: 'Marcar consulta',
            en: 'Book appointment',
            es: 'Marcar consulta',
            'zh-sg': '預約',
          },
        },
        link: Routes.CONTACTS,
      },
    },
    sliders: [
      {
        id: 1,
        imageMobile: '/images/homepage/hero-banner-block/image-1/image-1-mobile.jpg',
        imageTablet: '/images/homepage/hero-banner-block/image-1/image-1-tablet.jpg',
        imageDesktop: '/images/homepage/hero-banner-block/image-1/image-1-desktop.jpg',
        alt: {
          translations: {
            pt: 'Imagem de um profissional de fisioterapia a ajudar o seu paciente no exercício supino com barra',
            en: 'Image of a physiotherapy professional helping his patient with the bench press exercise',
            es: 'Imagen de un profesional de la fisioterapia ayudando a su paciente con el ejercicio de press de banca.',
            'zh-sg': '物理治療師協助病人進行臥推練習的影像',
          },
        },
      },
      {
        id: 2,
        imageMobile: '/images/homepage/hero-banner-block/image-2/image-2-mobile.jpg',
        imageTablet: '/images/homepage/hero-banner-block/image-2/image-2-tablet.jpg',
        imageDesktop: '/images/homepage/hero-banner-block/image-2/image-2-desktop.jpg',
        alt: {
          translations: {
            pt: 'Imagem de um profissional de fisioterapia a ajudar o seu paciente com um problema de joelho.',
            en: 'Image of a physiotherapy professional helping his patient with a knee problem.',
            es: 'Imagen de un profesional de la fisioterapia ayudando a su paciente con un problema de rodilla.',
            'zh-sg': '物理治療師幫助膝蓋有問題的病人的圖像',
          },
        },
      },
      {
        id: 3,
        imageMobile: '/images/homepage/hero-banner-block/image-3/image-3-mobile.jpg',
        imageTablet: '/images/homepage/hero-banner-block/image-3/image-3-tablet.jpg',
        imageDesktop: '/images/homepage/hero-banner-block/image-3/image-3-desktop.jpg',
        alt: {
          translations: {
            pt: 'Imagem de uma mulher a receber um tratamento de bem-estar por parte de uma profissional da fisioterapia.',
            en: 'Image of a woman receiving a wellness treatment from a physiotherapy professional.',
            es: 'Imagen de una mujer recibiendo un tratamiento de bienestar por parte de un profesional de la fisioterapia.',
            'zh-sg': '一位女士接受物理治療專家提供的健康治療的圖片。',
          },
        },
      },
    ],
  };

  return getDataByLocale(data, locale as string);
});
