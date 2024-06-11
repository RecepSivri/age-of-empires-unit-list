import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { UnitsComponent } from "./pages/units/units.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "units", component: UnitsComponent },
  { path: "detail/:id", component: DetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
