import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BodyTableComponent } from "./body-table.component";
import { RouterTestingModule } from '@angular/router/testing';
describe("BodyTableComponent", () => {
  let component: BodyTableComponent;
  let fixture: ComponentFixture<BodyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyTableComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
