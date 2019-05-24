import { DISHES } from './../shared/dishes';
import { Dish } from './../shared/dish';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter(dishParam => dishParam.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(featDishParam => featDishParam.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
