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
  on(setWoodFilter, (state, { wood }) => ({ ...state, filter: {...state.filter, wood: wood}, filteredunits: filterData(state.units, {...state.filter, wood: wood})})),
  on(setFoodFilter, (state, { food }) => ({ ...state, filter: {...state.filter, food: food}, filteredunits: filterData(state.units, {...state.filter, food: food})})),
  on(setGoldFilter, (state, { gold }) => ({ ...state, filter: {...state.filter, gold: gold}, filteredunits: filterData(state.units, {...state.filter, gold: gold})})),
  on(setAgeFilter, (state, { age }) => ({ ...state, filter: {...state.filter, age: age}, filteredunits: filterData(state.units, {...state.filter, age: age})})),
);

const filterDataByAge = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  return filter.age === 'all' ? units : units.filter((unit: IUnit) => {
    return  unit.age.toLowerCase() === filter.age.toLowerCase(); 
  })
}

const filterDataByWood = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  const {wood} = filter;
  return wood.checked ?units.filter((unit: IUnit) => {
    return   unit.cost?.Wood && unit.cost?.Wood <= wood.max && unit.cost?.Wood >= wood.min
  }): units
}

const filterDataByFood = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  const {food} = filter;
  return food.checked ?units.filter((unit: IUnit) => {
    return   unit.cost?.Food && unit.cost?.Food <= food.max && unit.cost?.Food >= food.min
  }): units
}

const filterDataByGold = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  const {gold} = filter;
  return gold.checked ?units.filter((unit: IUnit) => {
    return   unit.cost?.Gold && unit.cost?.Gold <= gold.max && unit.cost?.Gold >= gold.min
  }): units
}


const filterData = (units: Readonly<IUnit[]>, filter: IFilterState) => {
  return filterDataByAge(filterDataByWood(filterDataByFood(filterDataByGold(units,filter),filter),filter),filter);
}
