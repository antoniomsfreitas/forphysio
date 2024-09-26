import type {
  ImageFullwidthBlock,
  IntroBlock,
  TopicsBlock,
  BannerBlock,
  SideImageBlock,
  TwoImagesGridBlock,
} from './blocks.model';

export interface Service {
  id: number;
  slug: string;
  title: string;
  image: string;
  blocks?: {
    intro?: IntroBlock;
    sideImage?: SideImageBlock;
    imageFullwidth_1?: ImageFullwidthBlock;
    topics_1?: TopicsBlock;
    twoImagesGrid?: TwoImagesGridBlock;
    topics_2?: TopicsBlock;
    imageFullwidth_2?: ImageFullwidthBlock;
    text?: string;
    appointmentBanner?: BannerBlock;
  };
}
