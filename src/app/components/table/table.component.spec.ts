import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store, StoreModule } from '@ngrx/store';
import { TableComponent } from "./table.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { paginationReducer } from "src/store/pagination/pagination.reducer";
import { setPagination } from "src/store/pagination/pagination.action";

describe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let store: MockStore;
  const initialState = {
    current:1,
    size: 0,
    pageSize:0,
    pageListSize: 0,
    datas: [],
    filteredDatas:[],
    length: 0}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [StoreModule.forRoot({ pagination: paginationReducer })],
      providers: [provideMockStore({}), { provide: Store, useValue: store },
        provideMockStore({ initialState })]
    }).compileComponents();
    store = TestBed.inject(Store) as MockStore;
    spyOn(store, 'dispatch').and.callThrough(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ngOnInit --test", () => {
    component.pagination = {
      current: 1,
      pageListSize: 5,
      pageSize: 10
    }
    component.ngOnInit();
    store.subscribe((value: any) => {
      expect(value.current).toEqual(1)
    })   
  });

  it("ngOnChanges --test", () => {
    component.pagination = {
      current: 1,
      pageListSize: 5,
      pageSize: 10
    }
    component.ngOnChanges();
    store.subscribe((value: any) => {
      expect(value.current).toEqual(1)
    })   
  });
});
