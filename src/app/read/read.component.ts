import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Food } from '../food-model';
import { Adis2Service } from '../services/adis2.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  food$: Observable<Food[]>;

  constructor(public store: Store<AppState>) {
    this.food$ = this.store.select('foods')
   }

 ngOnInit(){

 }

}
