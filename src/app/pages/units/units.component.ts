import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Store, select } from "@ngrx/store";
import { IColumn, IPaginationTable } from "src/models/table";
import { selectFilteredUnits, selectUnits } from "src/store/units/units.selector";

@Component({
  selector: "app-units",
  templateUrl: "./units.component.html",
  styleUrls: ["./units.component.scss"],
})
export class UnitsComponent implements OnInit {

  currentFilter: string = 'all'; 
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
    pageListSize: 5
  }
  $tableData = this.store.pipe(select(selectFilteredUnits));
  
  constructor(
    private store: Store,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
  }

  selectFilter = (filter: string) => {
    this.currentFilter = filter;
  }
}
