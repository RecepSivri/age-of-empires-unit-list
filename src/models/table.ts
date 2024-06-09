export interface IColumn {
  name: string;
  field: string;
  render?: (param: any) => void;
  width?: string;
}

export interface IPaginationTable{
    current: number;
    pageListSize: number;
    pageSize: number;
}