export interface IFilter {
  max: number;
  min: number;
  checked: boolean;
}

export interface IFilterState {
  wood: IFilter;
  food: IFilter;
  gold: IFilter;
  age: string;
}