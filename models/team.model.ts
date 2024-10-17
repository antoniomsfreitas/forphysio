import type { IntroBlock } from './blocks.model';
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
  location?: Location;
  booking?: string;
}
