import type { TitleTextBlock } from './blocks.model';

export interface PartnershipsPage {
  pageBlocks?: TitleTextBlock[];
  partners?: Partner[];
}

export interface Partner {
  title: string;
  link?: string;
  image?: string;
}
