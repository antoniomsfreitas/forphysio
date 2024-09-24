export interface AboutUsBlock {
  title: {
    regular: string;
    highlighted: string;
  };
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
