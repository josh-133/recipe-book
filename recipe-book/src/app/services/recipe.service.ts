import { Injectable } from '@angular/core';
import { RecipeInterface } from '../interfaces/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  createRecipe(title: string, ingredients: string, method: string) {
    console.log(`Recipe created: title: ${title}, ingredients: ${ingredients}, method: ${method}.`);
  }
}
