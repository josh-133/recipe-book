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

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  createRecipe(title: string, ingredients: string, method: string) {
    console.log(`Recipe created: title: ${title}, ingredients: ${ingredients}, method: ${method}.`);
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.recipes.length + 1; // Assign a new ID
    this.recipes.push(recipe);
    this.recipeSubject.next(this.recipes)
  }

  updateRecipe(updatedRecipe: Recipe) {
    const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
      this.recipeSubject.next(this.recipes);
    } else {
      console.error('Recipe not found');
    }
  }
}
