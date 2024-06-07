import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from 'src/models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any;
  @Input() column: IColumn[];
  constructor() { 
    this.data = [];
    this.column = [];
  }

  ngOnInit(): void {
  }

}
