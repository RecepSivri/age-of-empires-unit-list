import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Store, select } from "@ngrx/store";
import { NzMarks } from "ng-zorro-antd/slider";
import { IFilter } from "src/models/filter";
import { IColumn, IPaginationTable } from "src/models/table";
import { IUnit } from "src/models/units";
import { filterUnits } from "src/store/units/units.action";
import { selectFilteredUnits } from "src/store/units/units.selector";

@Component({
  selector: "app-units",
  templateUrl: "./units.component.html",
  styleUrls: ["./units.component.scss"],
})
export class UnitsComponent implements OnInit {

  currentFilter: string = 'all'; 
  woodFilter: IFilter = {
    min: 0,
    max: 200,
    checked: false
  }

  foodFilter: IFilter = {
    min: 0,
    max: 200,
    checked: false
  }

  goldFilter: IFilter = {
    min: 0,
    max: 200,
    checked: false
  }
  

  returnImage = (value: string) => {
    const htmlString = `
      <div style="margin-top: 3px">
        <img src= ${"../../../assets/img/unit-icons/" + value + ".webp"} width="64px"/>
      </div>`;
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  };

  columns: IColumn[] = [
    { name: "Icon", field: "image", render: this.returnImage, width: "16%" },
    { name: "Name", field: "name", width: "28%" },
    { name: "Age", field: "age", width: "28%" },
    {
      name: "Costs",
      field: "cost",
      render: (value: any) => {
        const val: string = JSON.stringify(value);
        return val.substring(1, val.length - 1);
      },
      width: "28%",
    },
  ];
  paginationParam: IPaginationTable = {
    current: 1,
    pageSize: 10,
    pageListSize: 4
  }
  $tableData = this.store.pipe(select(selectFilteredUnits));
  
  constructor(
    private store: Store,
    private sanitizer: DomSanitizer,
  ) {}

  marks: NzMarks = {
    0: {
      style: {
        color: '#ab9354'
      },
      label: '<strong>0</strong>'
    },
    100: {
      style: {
        color: '#ab9354'
      },
      label: '<strong>200</strong>'
    }
  };
  
  ngOnInit(): void {
  }

  selectFilter = (filter: string) => {
    this.currentFilter = filter;

    switch(this.currentFilter) {
      case 'all':
        this.store.dispatch(filterUnits({filter: (data: Readonly<IUnit[]>): IUnit[] => {return [...data]}}))
        break;
      case 'dark':
        this.filterDatas('dark')
        break;
      case 'feudal':
        this.filterDatas('feudal')
          break;
      case 'castle':
        this.filterDatas('castle')
          break;
      case 'imperial':
        this.filterDatas('imperial')
          break;
    }
  }

  filterDatas = (key: string) => {
    this.store.dispatch(filterUnits({filter: (data: Readonly<IUnit[]>): IUnit[] => {return data.filter((item: IUnit) => {
      return item.age.toLowerCase() === key;
    })}}))
  }
}
