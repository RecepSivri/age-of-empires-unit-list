import { createAction, props } from "@ngrx/store";
import { IFilter } from "src/models/filter";
import { IUnit } from "src/models/units";

export const getUnits = createAction(
  "[Initial Units] Load Units",
  props<{ units: IUnit[] }>(),
);

export const setWoodFilter = createAction(
  "[Set Wood Filter] Set Wood Filter",
  props<{ wood: IFilter }>(),
);

export const setFoodFilter = createAction(
  "[Set Food Filter] Set Food Filter",
  props<{ food: IFilter }>(),
);

export const setGoldFilter = createAction(
  "[Set Wood Filter] Set Gold Filter",
  props<{ gold: IFilter }>(),
);

export const setAgeFilter = createAction(
  "[Set Age Filter] Set Age Filter",
  props<{ age: string }>(),
);