export interface ICost {
  Wood?: number;
  Gold?: number;
  Food?: number;
}

export interface IUnit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: ICost | null;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight: number;
  hit_points: number;
  range?: string | number;
  attack?: number;
  armor: string;
  accuracy?: string;
  attack_bonus?: string[];
  blast_radius?: number;
  search_radius?: number;
  armor_bonus?: string[];
  image?: string;
}

export interface IUnitResponse {
  units: IUnit[];
}

