import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { IUnitState } from "./units.state";


export const selectAppState = createFeatureSelector<IUnitState>('app');
export const selectUnits = createSelector(
  selectAppState,
  (app: Readonly<IUnitState>) => app.units
);

export const selectFilteredUnits = createSelector(
  selectAppState,
  (app: Readonly<IUnitState>) => app.filteredunits
);
