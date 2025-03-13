import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient) {}

  recipes: Recipe[] = [];

  private recipeSubject = new BehaviorSubject<Recipe[]>(this.recipes);

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  createRecipe(newRecipe: Recipe) {
    return this.http.post<Recipe>(`${this.apiUrl}`, newRecipe);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post<Recipe[]>(this.apiUrl, recipe);
  }

  updateRecipe(updatedRecipe: Recipe) {
    return this.http.post<Recipe[]>(
      `${this.apiUrl}/${updatedRecipe.id}`,
      updatedRecipe
    );
  }

  deleteRecipe(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
