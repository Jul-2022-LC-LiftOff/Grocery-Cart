import { Ingredient } from "../ingredient/ingredient.component";
import { Recipe } from "../recipe/recipe.component";

export class RecipeIngredientDto {
    constructor(
      public recipe: Recipe,
      public ingredient: Ingredient
    ) {
    }
  }
