import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public ingredients: Ingredient[],
    public steps: Step[],
    public link: string
  ) {
  }
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
