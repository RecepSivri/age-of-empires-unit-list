import { createAction, props } from "@ngrx/store";
import { IUnit } from "src/models/units";

export const getUnits = createAction(
    '[Initial Units] Load Units',
    props<{ units: IUnit[] }>()
  );