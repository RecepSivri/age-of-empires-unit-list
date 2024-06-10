import { createReducer, on, Action } from "@ngrx/store";
import { IUnitState } from "./units.state";
import { getUnits, setAgeFilter, setFoodFilter, setGoldFilter, setWoodFilter } from "./units.action";
import { IUnit } from "src/models/units";
import { IFilter, IFilterState } from "src/models/filter";

export const initialState: Readonly<IUnitState> = {
  units: [],
  filteredunits: [],
  filter: {
    wood: {
      max: 200,
      min: 0,
      checked: false
    },
    food: {
      max: 200,
      min: 0,
      checked: false
    },
    gold: {
      max: 200,
      min: 0,
      checked: false
    },
    age: 'all'
  }
};

export const unitsReducer = createReducer(
  initialState,
  on(getUnits, (state, { units }) => ({ ...state, units: units, filteredunits: units })),
  on(setWoodFilter, (state, { wood }) => ({ ...state, filter: {...state.filter, wood: wood}, filteredunits: filterDataByWood(state.units, {...state.filter, wood: wood})})),
  on(setFoodFilter, (state, { food }) => ({ ...state, filter: {...state.filter, food: food}, filteredunits: filterData(state.units, {...state.filter, food: food})})),
  on(setGoldFilter, (state, { gold }) => ({ ...state, filter: {...state.filter, gold: gold}, filteredunits: filterData(state.units, {...state.filter, gold: gold})})),
  on(setAgeFilter, (state, { age }) => ({ ...state, filter: {...state.filter, age: age}, filteredunits: filterDataByAge(state.units, {...state.filter, age: age})})),
);

const filterDataByAge = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  return filter.age === 'all' ? units : units.filter((unit: IUnit) => {
    return  unit.age.toLowerCase() === filter.age.toLowerCase(); 
  })
}

const filterDataByWood = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  const {wood} = filter;

  return units.filter((unit: IUnit) => {
    return wood.checked && unit.cost?.Wood && unit.cost?.Wood <= wood.max && unit.cost?.Wood >= wood.min
  }) 
}
const filterData = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  return units.filter((unit: IUnit) => {
    return  filter.age === 'all' ? units : unit.age.toLowerCase() === filter.age.toLowerCase(); 
  })
}
