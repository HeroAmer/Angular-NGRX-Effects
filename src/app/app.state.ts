
import { Food } from './food-model';
import { MovieState } from './effects-demo-component/reducers/movies.reducer';

export interface AppState {
    readonly foods : Food[];
    readonly movies : MovieState;
}