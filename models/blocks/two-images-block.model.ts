interface TwoImagesBlockHighlight {
  id: number;
  title: string;
  description: string;
  cta: {
    label: string;
    link: string;
  };
  image: {
    alt: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface TwoImagesBlock {
  highlights: TwoImagesBlockHighlight[];
}
