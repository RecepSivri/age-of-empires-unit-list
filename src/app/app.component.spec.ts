import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { provideMockStore } from "@ngrx/store/testing";
import { DetailComponent } from "./pages/detail/detail.component";
import { Router } from "@angular/router";

describe("AppComponent", () => {
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterTestingModule.withRoutes([
        { path: 'units', component: DetailComponent }
      ])],
      declarations: [AppComponent, DetailComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("app ngOnInit --test", fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    router = TestBed.inject(Router);
    router.initialNavigation();
    app.ngOnInit();
    router.navigate(['/units']);
    tick();
    expect(app.currentUrl).toEqual('/units');
  }));
});
