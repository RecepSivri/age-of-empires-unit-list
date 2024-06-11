import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ICost, IUnit } from "src/models/units";
import { selectUnits } from "src/store/units/units.selector";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}
  $units = this.store.select(selectUnits);

  ngOnInit(): void {}

  getUnitById = (units: Readonly<IUnit[]> | null) => {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const value = units?.filter((item: IUnit) => {
        return item.id +'' === id
      })
      return value
    }
    return [];
  }

  renderCost = (value: ICost) => {
    const keys = Object.keys(value);
    const values = Object.values(value);
    let renderCosts: string[] = [];
    keys.forEach((item: string, index: number) => {
      renderCosts.push( item + ': ' +  values[index]);
    }) 
    return renderCosts;
  }

  returnCostType = (value: string) => {
    return value.split(':')[0];
  } 
}
