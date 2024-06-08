import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from 'src/models/table';

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.scss']
})
export class BodyTableComponent implements OnInit {

  @Input() data: any;
  @Input() column: IColumn[];
  constructor() {
    this.data = [];
    this.column = [];
  }

  ngOnInit(): void {}

}
