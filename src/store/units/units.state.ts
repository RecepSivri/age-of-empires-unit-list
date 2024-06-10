import { IFilterState } from "src/models/filter";
import { IUnit } from "src/models/units";

export interface IAppState {
  app: IUnitState;
}

export interface IUnitState {
  units: Readonly<IUnit[]>;
  filteredunits: Readonly<IUnit[]>;
  filter: IFilterState;

}
