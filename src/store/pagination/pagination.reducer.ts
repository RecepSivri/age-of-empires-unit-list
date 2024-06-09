import { createReducer, on, Action } from "@ngrx/store";
import { IPaginationState } from "./pagination.state";
import { changePage, setPagination } from "./pagination.action";
import { IUnit } from "src/models/units";


export const initialState: Readonly<IPaginationState> = {
  current:1,
  size: 0,
  pageSize:0,
  pageListSize: 0,
  datas: [],
  filteredDatas:[],
  length: 0
};

export const paginationReducer = createReducer(
  initialState,
  on(setPagination, (state, { pageListSize, pageSize, current, filteredDatas }) => ({ ...state,length: filteredDatas.length,  pageListSize: pageListSize, pageSize:  pageSize, current: current, size: Math.ceil(filteredDatas.length / pageSize), 
  filteredDatas: filteredDatas, datas: getSubArray(pageSize, current, filteredDatas, Math.ceil(filteredDatas.length / pageSize), filteredDatas.length)})),
  on(changePage, (state, {  current }) => ({ ...state, current: current, 
    datas: getSubArray(state.pageSize, current, state.filteredDatas, Math.ceil(state.filteredDatas.length / state.pageSize), state.length)
  })),
);

const getSubArray = (pageSize: number, current: number, datas: IUnit[], size: number,length: number) => {
  const index = current -1;
  if(index * pageSize <  length){
    return  datas.slice(index*pageSize, (index +1) *pageSize)
  } else {
    return  datas.slice(index*pageSize, length)
  }
}