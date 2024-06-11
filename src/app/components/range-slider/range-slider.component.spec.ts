import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderComponent } from './range-slider.component';

describe('RangeSliderComponent', () => {
  let component: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onChecked --test', () => {
    component.onChecked(true)
    expect(component.checked).toEqual(true)
  });

  it('changeValues --test', () => {
    component.changeValues([10,20])
    expect([component.min, component.max]).toEqual([10,20])
  });
});
