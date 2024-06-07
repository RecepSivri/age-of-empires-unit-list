import { createReducer, on, Action } from '@ngrx/store';
import { IUnitState } from './units.state';
import { getUnits } from './units.action';



export const initialState: Readonly<IUnitState> =  {
    units: [],
    filteredunits: []
}

export const unitsReducer = createReducer(
  initialState,
  on(getUnits, (state, { units }) => ({...state, units: units}))
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/