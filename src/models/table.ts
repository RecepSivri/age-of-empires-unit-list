export interface IColumn {
    name: string;
    field: string;
    render?: (param: any) => void;
}