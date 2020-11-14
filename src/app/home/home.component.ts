import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';//import Dish class that models dish data
import { DishService } from '../services/dish.service';//import service
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dishService: DishService,
    private promotionService: PromotionService) { }

  dish: Dish; //give VM attribute 'dish' set to imported class 'Dish'
  promotion: Promotion; //give VM attribute 'promotion' set to imported class 'Promotion'

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish(); //set component's dish property through injected service
    this.promotion = this.promotionService.getFeaturedPromotion(); //same as above.
  }

}
