import { Component, Input, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IColumn } from "src/models/table";
import { setPagination } from "src/store/pagination/pagination.action";
import { selectDatas } from "src/store/pagination/pagination.selector";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() column: IColumn[];
  
  $tableData = this.store.pipe(select(selectDatas));
  constructor( private store: Store) {
    this.data = [];
    this.column = [];
    
  }
  

  ngOnInit(): void {
    this.store.dispatch(setPagination({ current: 1, pageListSize: 5, pageSize: 10, datas: this.data }));
  }
}
