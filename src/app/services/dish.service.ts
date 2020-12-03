import { Injectable } from '@angular/core';
//import { resolve } from 'dns';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({//this decorator make the DishService object injectable
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]>{//parameterless function with return type of Dish[] that returns an array of json objects
   return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
      //simulate server latency with 2 second delay
      return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe( delay (2000));
  }

  getFeaturedDish(): Observable<Dish> {
      //simulate server latency with 2 second delay
      return of(DISHES.filter((dish) => dish.featured)[0]).pipe( delay (2000));
  }

  getDishIds(): Observable<string[] | any>{
    return of(DISHES.map(dish => dish.id))

  }
}
