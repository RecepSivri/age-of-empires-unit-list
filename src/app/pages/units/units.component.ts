import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IColumn } from 'src/models/table';
import {  selectUnits } from 'src/store/units.selector';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
 
  columns: IColumn[] = [{name: 'Name', field: 'name'}, {name: 'Age', field: 'age'}, {name: 'Costs',field: 'cost', render: (value: any) => { 
    const val: string = JSON.stringify(value);
    return  val.substring(1, val.length -1)}}]
  $tableData = this.store.pipe(select(selectUnits));
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
