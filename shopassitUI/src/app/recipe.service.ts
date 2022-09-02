import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public getRecipeById(id: number): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/' + id;
    return this.http.get<Recipe>(url);
  }

  public getIngredients(): Observable<Ingredient[]> {
    const url = "http://localhost:8080/ingredientEntries";
    return this.http.get<Ingredient[]>(url);
  }

  public getIngredientById(id: number): Observable<Ingredient> {
    const url = 'http://localhost:8080/ingredientEntries/' + id;
    return this.http.get<Ingredient>(url);
  }

  public getSteps(): Observable<Step[]> {
    const url = "http://localhost:8080/steps";
    return this.http.get<Step[]>(url);
  }

  public getStepById(id: number): Observable<Step> {
    const url = 'http://localhost:8080/steps/' + id;
    return this.http.get<Step>(url);
  }

  public addRecipe(recipe: Recipe): Observable<Recipe> {
    const url = "http://localhost:8080/recipes/addnew";
    return this.http.post<Recipe>(url, recipe);
  }

  public addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    const url = "http://localhost:8080/ingredientEntries/addnew";
    return this.http.post<Ingredient>(url, ingredient);
  }

  public addStep(step: Step): Observable<Step> {
    const url = "http://localhost:8080/steps/addnew";
    return this.http.post<Step>(url, step);
  }

  public addRecipeIngredientDto(recipeId: number, ingredientId: number): Observable<Ingredient> {
    const url = 'http://localhost:8080/recipes/' + recipeId + '/addIngredients';
    return this.http.post<Ingredient>(url, ingredientId);
  }

  public addRecipeStepDto(recipeId: number, stepId: number): Observable<Step> {
    const url = 'http://localhost:8080/recipes/' + recipeId + '/addSteps';
    return this.http.post<Step>(url, stepId);
  }
}
