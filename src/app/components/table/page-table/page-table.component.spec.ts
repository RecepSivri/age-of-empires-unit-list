import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableComponent } from './page-table.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PageTableComponent', () => {
  let component: PageTableComponent;
  let fixture: ComponentFixture<PageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTableComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges --test', () => {
    component.pagination =  {
      size: 10,
      current: 1,
      pageSize: 10,
      pageListSize: 5,
      datas: [],
      length: 0,
      filteredDatas: []
    }
    component.ngOnChanges();
    expect(component.listIndex).toEqual(0);
  });

  it('increase --test', () => {
    component.pagination =  {
      size: 10,
      current: 1,
      pageSize: 10,
      pageListSize: 5,
      datas: [],
      length: 0,
      filteredDatas: []
    }
    component.increase();
    component.increase();
    component.increase();
    component.increase();
    component.increase();
    
    expect(component.listIndex).toEqual(1);
  });

  it('increase --test', () => {
    component.pagination =  {
      size: 10,
      current: 1,
      pageSize: 10,
      pageListSize: 5,
      datas: [],
      length: 0,
      filteredDatas: []
    }
    for (let i = 0; i < 5; i++) {
      component.increase();
    }
    
    expect(component.listIndex).toEqual(1);
  });

  it('decrease --test', () => {
    component.pagination =  {
      size: 10,
      current: 1,
      pageSize: 10,
      pageListSize: 5,
      datas: [],
      length: 0,
      filteredDatas: []
    }
    for (let i = 0; i < 5; i++) {
      component.increase();
    }

    component.decrease();
    
    expect(component.listIndex).toEqual(0);
  });

  it('setPage --test', () => {
    component.setPage(5);
    expect(component.current).toEqual(5);
  });

  it('returnPageListSize --test', () => {
    component.pagination =  {
      size: 11,
      current: 1,
      pageSize: 10,
      pageListSize: 5,
      datas: [],
      length: 0,
      filteredDatas: []
    }
    expect( component.returnPageListSize(2)).toEqual(5);
  });

  it('returnPageListSize --test', () => {
    component.pagination =  null
    expect( component.returnPageListSize(2)).toEqual(0);
  });

  it('setFinalPage --test', () => {
    component.pagination =  {
      size: 11,
      current: 1,
      pageSize: 10,
      pageListSize: 5,
      datas: [],
      length: 0,
      filteredDatas: []
    }
    component.setFinalPage(11)
    expect( component.current).toEqual(11);
  });
});
