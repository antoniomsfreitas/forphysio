import type { AboutUsBlock } from './about-us-block.model';
import type { HeroBanner } from './hero-banner.model';
import type { TwoImagesBlock } from './two-images-block.model';

export interface HomepageBlocks {
  'hero-banner': HeroBanner;
  'about-us-block': AboutUsBlock;
  'two-images-block': TwoImagesBlock;
}
