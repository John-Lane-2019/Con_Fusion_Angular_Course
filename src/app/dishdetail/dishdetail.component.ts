import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router/'; //lets you pass paramaters between components
import { Location } from '@angular/common'; //lets you track a page's history in browser
import { Dish } from '../shared/dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

 
  dish: Dish;

  constructor(private dishService: DishService,
    private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];//id pass as paramter
    this.dishService.getDish(id).then(dish => this.dish = dish);// dish set to dish id passed.
  }

  goBack(): void {
    this.location.back(); //back() uses the location service to take you back to the previous item in the browser history
  }

}
