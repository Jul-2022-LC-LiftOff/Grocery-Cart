import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe/recipe.component';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = "http://localhost:8080/recipes";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.baseUrl}`);
  }
}