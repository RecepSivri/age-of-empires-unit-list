import { createReducer, on, Action } from "@ngrx/store";
import { IPaginationState } from "./pagination.state";
import { setPagination } from "./pagination.action";
import { IUnit } from "src/models/units";


export const initialState: Readonly<IPaginationState> = {
  current:1,
  size: 0,
  pageSize:0,
  pageListSize: 0,
  datas: [],
  length: 0
};

export const paginationReducer = createReducer(
  initialState,
  on(setPagination, (state, { pageListSize, pageSize, current, datas }) => ({ ...state,length: datas.length,  pageListSize: pageListSize, pageSize:  pageSize, current: current, size: Math.ceil(datas.length / pageSize), datas: getSubArray(pageSize, current, datas, Math.ceil(datas.length / pageSize), state.length)})),
);

const getSubArray = (pageSize: number, current: number, datas: IUnit[], size: number,length: number) => {
  const index = current -1
  if(index * pageSize <  size){
    return  datas.slice(index*pageSize, (index +1) *pageSize)
  } else {
    return  datas.slice(index*pageSize, length)
  }
}