import { Routes } from '~/models/routes.model';
import type { HeroBannerBlock } from '~/models/blocks/hero-banner.model';
import { getFormattedDataByLocale } from '~/utils/api.util';

export const data = {
  info: {
    title: {
      translations: {
        pt: 'Exercício&nbsp;• Fisioterapia&nbsp;• Bem-Estar',
        en: 'Exercise • Physiotherapy • Wellness',
        es: 'Ejercicio • Fisioterapia • Bienestar.',
        'zh-sg': '運動 • 物理治療 • 健康',
      },
    },
    cta: {
      label: {
        translations: {
          pt: 'Marcar consulta',
          en: 'Book appointment',
          es: 'Marcar consulta',
          'zh-sg': '預約',
        },
      },
      link: Routes.SERVICES,
    },
  },
  sliders: [
    {
      id: 1,
      image: {
        alt: {
          translations: {
            pt: 'Imagem de um profissional de fisioterapia a ajudar o seu paciente',
            en: 'Image of a physiotherapy professional helping his patient',
            es: 'Imagen de un profesional de la fisioterapia ayudando a su paciente',
            'zh-sg': '物理治疗专业人员帮助病人的图片',
          },
        },
        mobile: '/images/homepage/hero-banner-block/image-4/image-4-mobile.jpeg',
        tablet: '/images/homepage/hero-banner-block/image-4/image-4-tablet.jpeg',
        desktop: '/images/homepage/hero-banner-block/image-4/image-4-desktop.jpeg',
      },
    },
    {
      id: 2,
      image: {
        alt: {
          translations: {
            pt: 'Imagem de um profissional de fisioterapia a ajudar o seu paciente',
            en: 'Image of a physiotherapy professional helping his patient',
            es: 'Imagen de un profesional de la fisioterapia ayudando a su paciente',
            'zh-sg': '物理治疗专业人员帮助病人的图片',
          },
        },
        mobile: '/images/homepage/hero-banner-block/image-5/image-5-mobile.jpg',
        tablet: '/images/homepage/hero-banner-block/image-5/image-5-tablet.jpg',
        desktop: '/images/homepage/hero-banner-block/image-5/image-5-desktop.jpg',
      },
    },
    {
      id: 3,
      image: {
        alt: {
          translations: {
            pt: 'Imagem de uma mulher a receber um tratamento de bem-estar por parte de uma profissional da fisioterapia.',
            en: 'Image of a woman receiving a wellness treatment from a physiotherapy professional.',
            es: 'Imagen de una mujer recibiendo un tratamiento de bienestar por parte de un profesional de la fisioterapia.',
            'zh-sg': '一位女士接受物理治療專家提供的健康治療的圖片。',
          },
        },
        mobile: '/images/homepage/hero-banner-block/image-6/image-6-mobile.jpg',
        tablet: '/images/homepage/hero-banner-block/image-6/image-6-tablet.jpg',
        desktop: '/images/homepage/hero-banner-block/image-6/image-6-desktop.jpg',
      },
    },
  ],
};

export default defineEventHandler((event): HeroBannerBlock => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
