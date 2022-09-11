import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ingredient } from './ingredient/ingredient.component';
import { Recipe } from './recipe/recipe.component';
import { Step } from './step/step.component';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<Recipe[]> {
    const url = "http://localhost:8080/recipes";
    return this.http.get<Recipe[]>(url);
  }

  public getIngredients(): Observable<Ingredient[]> {
    const url = "http://localhost:8080/ingredients";
    return this.http.get<Ingredient[]>(url);
  }

  public getSteps(): Observable<Step[]> {
    const url = "http://localhost:8080/steps";
    return this.http.get<Step[]>(url);
  }

  public addRecipe(recipe: Recipe): Observable<Recipe> {
    const url = "http://localhost:8080/recipes/addnew";
    return this.http.post<Recipe>(url, recipe);
  }

  public addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    const url = "http://localhost:8080/ingredients/addnew";
    return this.http.post<Ingredient>(url, ingredient);
  }

  public addStep(step: Step): Observable<Step> {
    const url = "http://localhost:8080/steps/addnew";
    return this.http.post<Step>(url, step);
  }

  //needs to be fixed?
  public addRecipeIngredient(recipeId: number, ingredients: Ingredient[]): Observable<Ingredient[]> {
    const url = 'http://localhost:8080/recipes/' + recipeId + '/addIngredients';
    return this.http.post<Ingredient[]>(url, ingredients);
  }

  //needs to be fixed?
  public addRecipeStep(recipeId: number, steps: Step[]): Observable<Step[]> {
    const url = 'http://localhost:8080/recipes/' + recipeId + '/addSteps';
    return this.http.post<Step[]>(url, steps);
  }

  public deleteRecipe(id: number): Observable<{}> {
    const deleteURL = 'http://localhost:8080/recipes/' + id + '/delete';
    return this.http.delete(deleteURL);
  }

  public getRecipeById(id: number): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/' + id;
    return this.http.get<Recipe>(url);
  }

  public getIngredientById(id: number): Observable<Ingredient> {
    const url = 'http://localhost:8080/ingredients/' + id;
    return this.http.get<Ingredient>(url);
  }

  public getStepById(id: number): Observable<Step> {
    const url = 'http://localhost:8080/steps/' + id;
    return this.http.get<Step>(url);
  }

  public verifyIngredientsInRecipe(id: number): Observable<Ingredient[]> {
    const url = 'http://localhost:8080/recipes/' + id + '/verifyIngredients';
    return this.http.get<Ingredient[]>(url);
  }

  public verifyStepsInRecipe(id: number): Observable<Step[]> {
    const url = 'http://localhost:8080/recipes/' + id + '/verifySteps';
    return this.http.get<Step[]>(url);
  }
}
