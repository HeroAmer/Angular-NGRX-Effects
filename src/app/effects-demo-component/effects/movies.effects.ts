import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { GetMoviesAction, MoviesActionTypes, GetMoviesSuccessAction, GetMoviesFailureAction } from '../actions/movies.actions'
import { Observable, of } from 'rxjs';
import { ShoppingService } from '../shopping.service';

@Injectable()
export class MoviesEffects {

    constructor(private actions$ : Actions, private shoppingService: ShoppingService){}

    getMovies$: Observable<Action> = createEffect(() =>
    this.actions$
     .pipe(
         ofType<GetMoviesAction>(MoviesActionTypes.GET_MOVIES),
         mergeMap(
             () => this.shoppingService.getShoppingItems()
             .pipe(
                 map(data => new GetMoviesSuccessAction(data)),
                 catchError(error => of(new GetMoviesFailureAction(error)))
             ),
         ),
      ),
    );
    

}