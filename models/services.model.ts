import type { Image, IntroBlock, TopicsBlock, BannerBlock, SideImageBlock, TwoImagesGridBlock } from './blocks.model';
import type { Location } from './contacts';

export interface ServiceList {
  id: number;
  slug: string;
  title: string;
  image: string;
  locations?: Location[];
}

export interface Service extends ServiceList {
  homepage: boolean;
  blocks?: {
    intro?: IntroBlock;
    sideImage?: SideImageBlock;
    imageFullwidth_1?: Image;
    topics_1?: TopicsBlock;
    twoImagesGrid?: TwoImagesGridBlock;
    topics_2?: TopicsBlock;
    imageFullwidth_2?: Image;
    text?: string;
    appointmentBanner?: BannerBlock;
  };
}
