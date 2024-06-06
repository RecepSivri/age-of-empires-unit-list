import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { units } from 'src/mocks/units';
import { IUnitResponse } from 'src/models/units';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getUnits() :Observable<IUnitResponse> {
    return of(units);
  }

}