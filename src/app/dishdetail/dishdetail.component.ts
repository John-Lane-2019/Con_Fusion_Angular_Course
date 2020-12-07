import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router/'; //lets you pass paramaters between components
import { Location } from '@angular/common'; //lets you track a page's history in browser
import { Dish } from '../shared/dish';
import {DishService} from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  comment: Comment;
  commentForm: FormGroup

  @ViewChild('cform') commentFormDirective;
 
  formErrors = {
    'name': '',
    'comment': ''
  }

  validationMessages = {
    'name':{
      'required': 'Your name is required',
      'minLength': 'Your name must be at least 2 characters long.',
      'maxLength': 'Your last name can be a maximum of 25 characters '
    },
    'comment':{
      'required': 'A comment is required.'
    }
  }
  
  constructor(private dishService: DishService,
    private location: Location, private route: ActivatedRoute, private fb:FormBuilder) { 
      this.createForm();
    }

  formatLabel(value: number){
    if(value >= 6){
      return Math.round(value / 6);
    }
    return value;
  }
 

  ngOnInit(): void {
     this.dishService.getDishIds()
     .subscribe((dishIds)=> this.dishIds = dishIds);
     this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index -1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index +1) % this.dishIds.length]
  }

  goBack(): void {
    this.location.back(); //back() uses the location service to take you back to the previous item in the browser history
  }

  createForm(){
    this.commentForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength, Validators.maxLength]],
      comment:['',[Validators.required]]
    })

    this.commentForm.valueChanges.
    subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //reset form validation messages
  }

  onValueChanged(data?: any){
    if(!this.commentForm){
      return;
    }
    const form = this.commentForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        //clear previous error messages if any
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.comment=this.commentForm.value;//value property of a form returns control values which in this case mirror structure of feedback class.
    console.log(this.comment);
    this.commentForm.reset({
    rating: 0,
    comment: '',
    author: '',
    date: '',
    });
    this.commentFormDirective.resetForm();
  }

}
