import { ComponentFixture, TestBed } from "@angular/core/testing";
import { units } from "src/mocks/units";
import { DetailComponent } from "./detail.component";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BehaviorSubject, of } from "rxjs";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { ICost } from "src/models/units";



describe("DetailComponent", () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let paramsSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    paramsSubject = new BehaviorSubject({ id: '3' });
    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({}),  {
        provide: ActivatedRoute,
        useValue: {
          params: paramsSubject.asObservable(),
          snapshot: {
            paramMap: {
              get: (key: string) => paramsSubject.getValue()[key]
            }
          }
        }
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("getUnitById --test", () => {
    const value = component.getUnitById(units.units);
    if(value){
      expect(value[0].name).toEqual('Arbalest');
    }
  });

  it("getUnitById --test  not Found", () => {
    paramsSubject.next({ id: null });
    fixture.detectChanges();
    const value = component.getUnitById(units.units);
    if(value){
      expect(value).toEqual([]);
    }
  });

  it("renderCost --test", () => {
    const value: ICost = {
      Wood: 50,
      Gold: 25
    }

    const renderCost = component.renderCost(value);
    expect(renderCost).toEqual(['Wood: 50', 'Gold: 25']); 
  });
});
