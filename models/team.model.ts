export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  image: string;
  description?: string;
  service?: number;
  location?: number;
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
