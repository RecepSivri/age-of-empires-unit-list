import { IUnit } from "src/models/units";

export interface IUnitState {
  units: Readonly<IUnit[]>;
  filteredunits: Readonly<IUnit[]>;
}