import { getFormattedDataByLocale } from '~/utils/api.util';
import type { AboutUsBlock } from '~/models/blocks/about-us-block.model';
import { Routes } from '~/models/routes.model';

export const data = {
  title: {
    regular: {
      translations: {
        pt: 'Fisioterapia que realmente {{ highlighted }}',
        en: 'Physiotherapy that really makes a {{ highlighted }}',
        es: 'La fisioterapia que de verdad {{ highlighted }}',
        'zh-sg': '真正重{{ highlighted }}物理治療',
      },
    },
    highlighted: {
      translations: {
        pt: 'importa',
        en: 'difference',
        es: 'importa',
        'zh-sg': '要的',
      },
    },
  },
  description: {
    translations: {
      pt: 'Desde 2014, que o foco da ForPhysio Clinic reside na prestação dos melhores cuidados em fisioterapia aos nossos clientes.\n\nAs sessões individualizadas, com 60 minutos de duração e sempre na presença do fisioterapeuta, garantem melhores resultados, de forma mais rápida e segura.',
      en: 'Since 2014, ForPhysio Clinic has focused on providing our clients with the best physiotherapy care.\n\nIndividualised sessions of 60 minutes, always in the presence of a physiotherapist, guarantee better results, faster and safer.',
      es: 'Desde 2014, ForPhysio Clinic se ha centrado en proporcionar a nuestros clientes la mejor atención fisioterapéutica.Las sesiones individualizadas de 60 minutos, siempre en presencia de un fisioterapeuta, garantizan mejores resultados, más rápidos y seguros.',
      'zh-sg': '自 2014 年以來, ForPhysio Clinic 一直專注於為我們的客戶提供最佳的物理治療護理。',
    },
  },
  cta: {
    label: {
      translations: {
        pt: 'Conheça-nos melhor',
        en: 'Find out more',
        es: 'Más información',
        'zh-sg': '進一步瞭解我們',
      },
    },
    link: Routes.ABOUT,
  },
  image: {
    alt: {
      translations: {
        pt: 'Imagem de uma profissional da ForPhysio a auxiliar a sua paciente num exercício de alongamento.',
        en: 'Picture of a ForPhysio professional helping her patient with a stretching exercise.',
        es: 'Imagen de una profesional de ForPhysio ayudando a su paciente con un ejercicio de estiramiento.',
        'zh-sg': 'ForPhysio 專業人員幫助病人做伸展運動的圖片。',
      },
    },
    mobile: '/images/homepage/about-us-block/image-2/image-2-mobile.jpg',
    tablet: '/images/homepage/about-us-block/image-2/image-2-tablet.jpg',
    desktop: '/images/homepage/about-us-block/image-2/image-2-desktop.jpg',
  },
};

export default defineEventHandler((event): AboutUsBlock => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
