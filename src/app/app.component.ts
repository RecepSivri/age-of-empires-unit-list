import { Component, OnInit } from '@angular/core';
import { UnitListService } from 'src/services/unit.list.services';
import { Store, select } from '@ngrx/store';
import { IUnitResponse } from 'src/models/units';
import { getUnits } from 'src/store/units.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private unitListService: UnitListService, private store: Store){

  }
  ngOnInit(): void {
    this.unitListService.getUnits().subscribe((value: IUnitResponse) => {
      const {units} = value;
      console.log(units);
      this.store.dispatch(getUnits({units: units}));
    })
  }
}
