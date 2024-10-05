import type { NewsletterBlock } from '~/models/blocks/newsletter-block';
import { getFormattedDataByLocale } from '~/utils/api.util';

export const data = {
  title: {
    translations: {
      pt: 'Subscreva a\nnossa newsletter',
      en: 'Subscribe to\nour newsletter',
      es: 'Suscríbete a\nnuestra newsletter',
      'zh-sg': '訂閱我們的\n新聞通訊',
    },
  },
  intro: {
    translations: {
      pt: 'Receba as novidades da ForPhysio Clinic',
      en: 'Receive the latest news from ForPhysio Clinic',
      es: 'Recibe las novedades de ForPhysio Clinic',
      'zh-sg': '接收 ForPhysio 診所的最新消息',
    },
  },
  image: {
    alt: {
      translations: {
        pt: 'Imagem de uma mulher a receber uma massagem na cabeça de uma profissional da ForPhysio',
        en: 'Image of a woman receiving a head massage from a ForPhysio professional',
        es: 'Imagen de una mujer recibiendo un masaje en la cabeza de una profesional de ForPhysio',
        'zh-sg': '一位女士在 ForPhysio 專業人員那裡接受頭部按摩的圖片',
      },
    },
    mobile: '/images/common/newsletter-block/image-mobile.jpg',
    tablet: '/images/common/newsletter-block/image-tablet.jpg',
    desktop: '/images/common/newsletter-block/image-desktop.jpg',
  },
};

export default defineEventHandler((event): NewsletterBlock => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(data, locale as string);
});
