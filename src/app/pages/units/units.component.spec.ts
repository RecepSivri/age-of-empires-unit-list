import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UnitsComponent } from "./units.component";
import { provideMockStore } from '@ngrx/store/testing';

describe("UnitsComponent", () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitsComponent],
      providers: [provideMockStore({})]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
