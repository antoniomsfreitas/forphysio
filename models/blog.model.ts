import type { SingleImage, Image } from './blocks.model';
import type { TeamMember } from './team.model';

export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  date: Date;
  imageList: SingleImage;
  categories: ArticleCategory[];
  author: TeamMember;
  landingPage: boolean;
  highlight: {
    enabled: boolean;
    image?: Image;
    intro?: string;
  };
  blocks?: {
    image_1?: Image;
    image_2?: Image;
    text_1?: string;
    text_2?: string;
    video?: {
      title: string;
      video: string;
    };
  };
}

export interface ArticleCategory {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  imageList: SingleImage;
  landingPage: boolean;
  highlight: boolean;
  articles?: Article[];
}

export interface Date {
  date: string;
  name: string;
}
