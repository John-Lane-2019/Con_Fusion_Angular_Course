import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({//this decorator make the DishService object injectable
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[]{//parameterless function with return type of Dish[] that returns an array of json objects
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish)=> (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
