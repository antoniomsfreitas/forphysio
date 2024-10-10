export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
}

export interface SingleImage {
  image: string;
  alt: string;
}

export interface IntroBlock {
  title: string;
  text: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
}

export interface TopicsBlock {
  title: string;
  topics: string[];
}

export interface BannerBlock {
  title?: string;
  text?: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
}

export interface SideImageBlock {
  title: string;
  text: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
}

export interface TwoImagesGridBlock {
  title?: string;
  text?: string;
  topics?: string[];
  imageBig: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
  imageSmall: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
}

export interface TitleTextBlock {
  title?: string;
  text?: string;
}
