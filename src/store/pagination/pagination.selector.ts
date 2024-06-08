import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPaginationState } from "./pagination.state";


export const selectPagination = createFeatureSelector<IPaginationState>("pagination");

export const selectCurrent = createSelector(
  selectPagination,
  (app: Readonly<IPaginationState>) => app.current,
);

export const selectSize = createSelector(
  selectPagination,
  (app: Readonly<IPaginationState>) => app.size,
);

export const selectPageSize= createSelector(
  selectPagination,
  (app: Readonly<IPaginationState>) => app.pageSize,
);

export const selectPageListSize= createSelector(
  selectPagination,
  (app: Readonly<IPaginationState>) => app.pageListSize,
);

export const selectDatas= createSelector(
  selectPagination,
  (app: Readonly<IPaginationState>) => app.datas,
);