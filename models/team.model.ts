export interface teamMember {
  id: number;
  name: string;
  description?: string;
  service?: number;
  location?: number;
  image?: string;
}

export interface teamLocation {
  id: number;
  title: string;
  selected?: boolean;
}

export interface teamService {
  id: number;
  title: string;
}
