import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'


import { StoreModule } from '@ngrx/store';
import { foodReducer } from './reducers/food-reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AddFoodComponent } from './add-food/add-food.component';
import { ReadComponent } from './read/read.component';
import { EffectsDemoComponentComponent } from './effects-demo-component/effects-demo-component.component';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects-demo-component/effects/movies.effects';
import { MoviesReducer } from './effects-demo-component/reducers/movies.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    ReadComponent,
    EffectsDemoComponentComponent
  ],
  imports: [
    StoreModule.forRoot({
      foods: foodReducer,
      movies: MoviesReducer
    }),
    EffectsModule.forRoot([MoviesEffects]),
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
