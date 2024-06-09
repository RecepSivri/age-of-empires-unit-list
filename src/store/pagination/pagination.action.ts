import { createAction, props } from "@ngrx/store";
import { IUnit } from "src/models/units";

export const setPagination = createAction(
  "[Initial Pagination] Initialize Pagination",
  props<{ pageSize: number, current: number, pageListSize: number, filteredDatas: IUnit[] }>(),
);

export const changePage = createAction(
  "[Change Page] Change Page",
  props<{current: number}>(),
);
