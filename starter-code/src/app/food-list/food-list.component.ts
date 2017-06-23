import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods              : Object[];
  pattern            : string;
  isEditing          : boolean = false;
  newFoodName        : string = "Example Name";
  newFoodCalories    : number = 250;
  newFoodImage       : string = "";
  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood(){
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0
    }

  this.foods.unshift(newFood);

  this.isEditing = false;
  this.newFoodName = "";
  this.newFoodCalories = null;
  this.newFoodImage = "";
}

}
