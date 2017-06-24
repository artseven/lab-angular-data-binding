// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Declarations
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { FoodSearchPipe} from './food-search.pipe';
import { MyFoodsComponent } from './my-foods/my-foods.component';
import { NewFoodFormComponent } from './new-food-form/new-food-form.component'
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    BuiltInPipesComponent,
    FoodSearchPipe,
    MyFoodsComponent,
    NewFoodFormComponent
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
