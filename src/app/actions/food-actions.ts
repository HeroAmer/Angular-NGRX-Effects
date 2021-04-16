import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Food } from '../food-model';

export const ADD_FOOD = '[FOOD] Add';
export const REMOVE_FOOD = '[FOOD] Remove';


export class AddFood implements Action {
    readonly type = ADD_FOOD;

    constructor(public payload: Food){}
}


export class RemoveFood implements Action {
    readonly type = REMOVE_FOOD;
    
    constructor(public payload: number){}
}


export type Actions =  AddFood | RemoveFood;