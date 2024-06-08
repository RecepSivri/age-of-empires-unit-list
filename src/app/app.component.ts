import { Component, OnDestroy, OnInit } from "@angular/core";
import { UnitListService } from "src/services/unit.list.services";
import { Store } from "@ngrx/store";
import { IUnitResponse } from "src/models/units";
import { getUnits } from "src/store/units/units.action";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private routerEventsSubscription$!: Subscription;
  public currentUrl: string = "/";
  constructor(
    private unitListService: UnitListService,
    private store: Store,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.routerEventsSubscription$ = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl = (<NavigationEnd>event).url;
      });

    this.unitListService.getUnits().subscribe((value: IUnitResponse) => {
      const { units } = value;
      this.store.dispatch(getUnits({ units: units }));
    });
  }

  navigate = (value: string) => {
    this.router.navigate([value]);
  };

  ngOnDestroy() {
    if (this.routerEventsSubscription$) {
      this.routerEventsSubscription$.unsubscribe();
    }
  }
}
