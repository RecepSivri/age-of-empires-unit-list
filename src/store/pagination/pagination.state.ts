import { IUnit } from "src/models/units";

export interface IPaginationState {
  size: Readonly<number>;
  current: Readonly<number>;
  pageSize: Readonly<number>;
  pageListSize: Readonly<number>;
  datas: IUnit[];
  length: number;
  filteredDatas: IUnit[];
}
