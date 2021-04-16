import { Action } from '@ngrx/store';
import { Food } from '../food-model';
import * as FoodActions from '../actions/food-actions';

export function foodReducer (state: Food [] = [], action: FoodActions.Actions){

    switch(action.type){
        case FoodActions.ADD_FOOD:
            alert('Added ' + action.payload.quantity + ' x ' + action.payload.name)
            return [...state, action.payload]
        default:
            return state
    }
}