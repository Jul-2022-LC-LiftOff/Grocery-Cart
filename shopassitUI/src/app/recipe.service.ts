import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './add-new/add-new.component';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<Recipe[]> {
    const url = "http://localhost:8080/recipes";
    return this.http.get<Recipe[]>(url);
  }

}
