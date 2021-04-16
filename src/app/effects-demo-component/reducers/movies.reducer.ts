import {MoviesActionTypes, MoviesAction } from '../actions/movies.actions';
import { Movie } from '../movies.model';

export interface MovieState {
    movies: Movie[],
    loading:boolean,
    error: Error
}


const initialState : MovieState = {
    movies: [],
    loading:false,
    error:undefined
}


export function MoviesReducer (state: MovieState = initialState, action: MoviesAction){

    switch(action.type){
        case MoviesActionTypes.GET_MOVIES:
            return {...state, loading: true};
        
        case MoviesActionTypes.GET_MOVIES_SUCCESS: 
            return { ...state , movies: action.payload , loading: false};

        case MoviesActionTypes.GET_MOVIES_FAILURE:
            return { ...state, error: action.payload , loading: false };

    }
    
}