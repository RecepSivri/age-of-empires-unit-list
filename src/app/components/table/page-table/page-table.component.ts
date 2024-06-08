import { Component, Input, OnInit } from '@angular/core';
import { IPaginationState } from 'src/store/pagination/pagination.state';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  @Input() pagination!: IPaginationState | null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pagination)
  }

}
