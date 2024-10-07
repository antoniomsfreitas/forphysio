import type {
  BannerBlock,
  ImageFullwidthBlock,
  IntroBlock,
  SideImageBlock,
  TopicsBlock,
  TwoImagesGridBlock,
} from './blocks.model';

export interface ServiceList {
  id: number;
  slug: string;
  title: string;
  image: string;
  locations?: number[];
}

export interface Service extends ServiceList {
  homepage: boolean;
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
