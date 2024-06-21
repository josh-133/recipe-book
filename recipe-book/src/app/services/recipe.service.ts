import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeList: Recipe[] = []

  getAllRecipes(): Recipe[] {
    return this.recipeList;
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipeList.find(recipe => recipe.id === id);
  }

  createRecipe(title: string, ingredients: string, method: string) {
    console.log(`Recipe created: title: ${title}, ingredients: ${ingredients}, method: ${method}.`);
  }
}
