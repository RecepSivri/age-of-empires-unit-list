import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from 'src/models/table';
import { IUnit } from 'src/models/units';

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.scss']
})
export class BodyTableComponent implements OnInit {

  @Input() data: any;
  @Input() column: IColumn[];
  constructor(private router: Router) {
    this.data = [];
    this.column = [];
  }

  ngOnInit(): void {}

  rowClick = (value: IUnit) => {
    const route = 'detail/'+value.id
    const url = this.router.serializeUrl(
      this.router.createUrlTree([route])
    );
    window.open(url, '_blank');
   
  }

}
