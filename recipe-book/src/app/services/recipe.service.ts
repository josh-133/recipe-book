import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8000/api/recipes';

  constructor(private http: HttpClient) { }

  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Recipe 1',
      ingredients: '1x egg',
      method: '1. Crack egg.',
      favourite: false
    },
    {
      id: 2,
      title: 'Recipe 2',
      ingredients: '2x eggs',
      method: '1. Crack eggs.',
      favourite: true
    }
  ];

  private recipeSubject = new BehaviorSubject<Recipe[]>(this.recipes);

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  createRecipe(title: string, ingredients: string, method: string) {
    console.log(`Recipe created: title: ${title}, ingredients: ${ingredients}, method: ${method}.`);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post<Recipe[]>(this.apiUrl, recipe);
  }

  updateRecipe(updatedRecipe: Recipe) {
    return this.http.put<Recipe[]>(`${this.apiUrl}/${updatedRecipe.id}`, updatedRecipe);
  }
}