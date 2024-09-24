interface HeroBannerSliders {
  id: number;
  image: {
    alt: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface HeroBanner {
  info: {
    title: string;
    cta: {
      label: string;
      link: string;
    };
  };
  sliders: HeroBannerSliders[];
}
