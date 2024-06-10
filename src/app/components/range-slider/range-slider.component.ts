import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { IFilter } from 'src/models/filter';

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
  @Output() sendFilter: EventEmitter<IFilter> = new EventEmitter<IFilter>();
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

  onChecked = (value: boolean) => {
    this.checked = value;
    this.sendFilter.emit({
      checked:  this.checked,
      min: this.min,
      max: this.max
    });
  }
  
  changeValues = (values: number[]) => {
    this.min = values[0];
    this.max = values[1];
    this.sendFilter.emit({
      checked:  this.checked,
      min: this.min,
      max: this.max
    });
  }
}
