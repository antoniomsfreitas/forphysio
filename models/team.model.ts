export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  description?: string;
  service?: number;
  location?: number;
  image?: string;
}

export interface TeamLocation {
  id: number;
  title: string;
  selected?: boolean;
  googleMapsSrc?: string;
}

export interface TeamService {
  id: number;
  title: string;
}
