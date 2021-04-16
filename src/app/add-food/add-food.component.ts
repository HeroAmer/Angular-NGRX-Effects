import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Food } from '../food-model'
import * as FoodActions from '../actions/food-actions'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  food = {
    name:"",
    quantity:""
  }

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
  }

 
  addFood(form:NgForm){
    if(form.invalid) return
    this.store.dispatch(new FoodActions.AddFood({name:form.value.name ,quantity:form.value.quantity}))
  }

}
