import { createAction, props } from "@ngrx/store";
import { IUnit } from "src/models/units";

export const setPagination = createAction(
  "[Initial Pagination] Load Units",
  props<{ pageSize: number, current: number, pageListSize: number, datas: IUnit[] }>(),
);
