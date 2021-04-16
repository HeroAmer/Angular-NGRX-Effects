import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { GetMoviesAction } from './actions/movies.actions';
import { MoviesEffects } from './effects/movies.effects';
import { Movie } from './movies.model';
import * as MoviesActions from './actions/movies.actions'

@Component({
  selector: 'app-effects-demo-component',
  templateUrl: './effects-demo-component.component.html',
  styleUrls: ['./effects-demo-component.component.scss']
})
export class EffectsDemoComponentComponent implements OnInit {

  
  constructor(private store: Store<AppState>) { }
  movies$ : Observable<Array<Movie>>;
  loading$ : Observable<boolean>;
  error$ : Observable<Error>;



  ngOnInit(): void {
    this.movies$ = this.store.select(store => store.movies.movies)

    this.store.dispatch(new MoviesActions.GetMoviesAction())
  }


}
