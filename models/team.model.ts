import type { IntroBlock } from './blocks.model';
import type { Article } from './blog.model';
import type { Service } from './services.model';
import type { Location } from '~/models/contacts';

export interface TeamPage {
  introBlock: IntroBlock;
}

export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  image: string;
  description?: string;
  role?: string;
  services?: Service[];
  customService?: string;
  location?: Location;
  booking?: string;
  contactsPage?: boolean;
  inactive?: boolean;
  articles?: Article[];
}
