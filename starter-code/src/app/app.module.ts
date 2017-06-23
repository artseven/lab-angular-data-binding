// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Declarations
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { FoodSearchPipe} from './food-search.pipe'
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    BuiltInPipesComponent,
    FoodSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
