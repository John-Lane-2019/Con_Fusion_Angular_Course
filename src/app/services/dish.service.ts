import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({//this decorator make the DishService object injectable
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]>{//parameterless function with return type of Dish[] that returns an array of json objects
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve( DISHES.filter((dish) => dish.featured)[0]);
  }
}
