import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { UnitsComponent } from "./pages/units/units.component";
import { MainComponent } from "./pages/main/main.component";
import { StoreModule } from "@ngrx/store";
import { unitsReducer } from "src/store/units/units.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TableComponent } from "./components/table/table.component";
import { BodyTableComponent } from "./components/table/body-table/body-table.component";
import { HeaderTableComponent } from "./components/table/header-table/header-table.component";
import { paginationReducer } from "src/store/pagination/pagination.reducer";
import { PageTableComponent } from './components/table/page-table/page-table.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    UnitsComponent,
    MainComponent,
    TableComponent,
    BodyTableComponent,
    HeaderTableComponent,
    PageTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: unitsReducer, pagination: paginationReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
