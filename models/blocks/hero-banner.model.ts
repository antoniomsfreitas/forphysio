interface HeroBannerSliders {
  id: number;
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  alt: string;
}

export interface HeroBannerData {
  info: {
    title: string;
    cta: {
      label: string;
      link: string;
    };
  };
  sliders: HeroBannerSliders[];
}
