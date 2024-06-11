import { Component, Input, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IColumn, IPaginationTable } from "src/models/table";
import { setPagination } from "src/store/pagination/pagination.action";
import { selectDatas, selectPagination } from "src/store/pagination/pagination.selector";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() column: IColumn[];
  @Input() pagination!: IPaginationTable;
  
  $tableData = this.store.pipe(select(selectDatas));
  $paginationData = this.store.pipe(select(selectPagination));
  constructor( private store: Store) {
    this.data = [];
    this.column = [];
    
  }
  ngOnChanges(){
    if(this.pagination){
      this.store.dispatch(setPagination({ current: this.pagination.current, pageListSize: this.pagination.pageListSize, pageSize: this.pagination.pageSize, filteredDatas: this.data }));
    }
    
  }
  

  ngOnInit(): void {
    if(this.pagination){
      this.store.dispatch(setPagination({ current: this.pagination.current, pageListSize: this.pagination.pageListSize, pageSize: this.pagination.pageSize, filteredDatas: this.data }));
    }
    
  }
}
