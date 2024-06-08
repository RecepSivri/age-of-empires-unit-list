import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPaginationState } from "./pagination.state";


export const selectAppState = createFeatureSelector<IPaginationState>("pagination");

export const selectCurrent = createSelector(
  selectAppState,
  (app: Readonly<IPaginationState>) => app.current,
);

export const selectSize = createSelector(
  selectAppState,
  (app: Readonly<IPaginationState>) => app.size,
);

export const selectPageSize= createSelector(
  selectAppState,
  (app: Readonly<IPaginationState>) => app.pageSize,
);

export const selectPageListSize= createSelector(
  selectAppState,
  (app: Readonly<IPaginationState>) => app.pageListSize,
);

export const selectDatas= createSelector(
  selectAppState,
  (app: Readonly<IPaginationState>) => app.datas,
);