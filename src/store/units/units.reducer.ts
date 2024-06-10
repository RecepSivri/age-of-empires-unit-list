import { createReducer, on, Action } from "@ngrx/store";
import { IUnitState } from "./units.state";
import { filterUnits, getUnits } from "./units.action";

export const initialState: Readonly<IUnitState> = {
  units: [],
  filteredunits: [],
};

export const unitsReducer = createReducer(
  initialState,
  on(getUnits, (state, { units }) => ({ ...state, units: units, filteredunits: units })),
  on(filterUnits, (state, { filter }) => ({ ...state, filteredunits: filter(state.units) })),
);
