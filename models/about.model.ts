import type { ColumnTitleTextBlock, Image, IntroBlock, TitleTextBlock } from './blocks.model';

export interface AboutPage {
  introBlock: IntroBlock;
  textBlock_1?: ColumnTitleTextBlock;
  textBlock_2?: ColumnTitleTextBlock;
  textBlock_3?: TitleTextBlock;
  imageFullwidth?: Image;
  sideImage?: Image;
}
