import { Component, Input, OnInit } from '@angular/core';
import { IPaginationState } from 'src/store/pagination/pagination.state';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  @Input() pagination!: IPaginationState | null;
  listIndex = 0;
  current = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increase = () => {
    if(this.pagination && this.current < this.pagination.size){
      this.current += 1;
      if(this.current%this.pagination.pageListSize === 1){
        ++this.listIndex;
      }
      this.changePage();
    }
  }

  decrease = () => {
    if(this.pagination && this.current > 1){
      this.current -= 1;
      if(this.current%this.pagination.pageListSize === 0){
        --this.listIndex;
      }
      this.changePage();
    }
  }

  setPage = (value: number) => {
    this.current = value;
    this.changePage();
  } 

  returnPageListSize = (value: number) => {
    if(this.pagination){
      return value < this.pagination.size ? this.pagination.pageListSize : this.pagination.pageListSize-(value-this.pagination.size);
    }else {
      return 0;
    }
  }

  changePage = () => {
    console.log(this.current)
  }

}
