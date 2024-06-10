import { Component, OnInit, Input } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  @Input() max!: number;
  @Input() min!: number;
  @Input() name!: string;
  @Input() checked!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  marks: NzMarks = {
    0: {
      style: {
        color: '#ab9354'
      },
      label: '<strong>0</strong>'
    },
    200: {
      style: {
        color: '#ab9354'
      },
      label: '<strong>200</strong>'
    }
  };

  onChecked = (value: any) => {
    this.checked = value.target.value;
  }
  
  changeValues = (values: number[]) => {
    this.min = values[0];
    this.max = values[1];
  }
}
