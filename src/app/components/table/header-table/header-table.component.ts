import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from 'src/models/table';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit {
  @Input() column: IColumn[];
  constructor() { 
    this.column = [];
  }

  ngOnInit(): void {
  }

}
