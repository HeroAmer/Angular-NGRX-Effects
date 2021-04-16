import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Movie } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  URL = 'https://56690834-4430-4769-b1c2-5d436603d4bf.mock.pstmn.io/movies';

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<Array<Movie>>(this.URL)
      .pipe(
    
      delay(500)
    )
  }
}
