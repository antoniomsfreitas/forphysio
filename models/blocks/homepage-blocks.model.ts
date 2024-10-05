import type { AboutUsBlock } from './about-us-block.model';
import type { CustomersReviewsBlock } from './customers-reviews-block.model';
import type { HeroBannerBlock } from './hero-banner.model';
import type { NewsletterBlock } from './newsletter-block';
import type { TwoImagesBlock } from './two-images-block.model';

export interface HomepageBlocks {
  heroBannerBlock: HeroBannerBlock;
  aboutUsBlock: AboutUsBlock;
  twoImagesBlock: TwoImagesBlock;
  customersReviewsBlock: CustomersReviewsBlock[];
  newsletterBlock: NewsletterBlock;
}
