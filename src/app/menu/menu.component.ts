import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[]; //create an array of dishes
 
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {//this is a lifecycle method called whenever component instantiated
     this.dishService.getDishes().subscribe(dishes => this.dishes = dishes) //dishes array to array returned by service
  }

  onSelect(dish: Dish){ //takes a Dish object as argument, sets selectedDish variable for template to dish passed as arg
    this.selectedDish = dish;
  }

}
