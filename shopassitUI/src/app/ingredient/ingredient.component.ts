import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.component';

export class Ingredient {
  constructor(
    public id: number,
    public amount: number,
    public unit: string,
    public ingredient: string,
    public recipes: Recipe[]
  ) {
  }
}

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}