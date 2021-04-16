import { Action } from "@ngrx/store";
import { Movie } from "../movies.model";


export enum MoviesActionTypes {
    GET_MOVIES = '[MOVIES] Get Movies',
    GET_MOVIES_SUCCESS = '[MOVIES] Get Movies Succes',
    GET_MOVIES_FAILURE = '[MOVIES] Get Movies Failure',
}


export class GetMoviesAction implements Action {
    readonly type = MoviesActionTypes.GET_MOVIES
}

export class GetMoviesSuccessAction implements Action {
    readonly type = MoviesActionTypes.GET_MOVIES_SUCCESS

    constructor(public payload: Array<Movie>){}
}


export class GetMoviesFailureAction implements Action {
    readonly type = MoviesActionTypes.GET_MOVIES_FAILURE

    constructor(public payload: Error){}
}


export type MoviesAction = GetMoviesAction | GetMoviesSuccessAction | GetMoviesFailureAction