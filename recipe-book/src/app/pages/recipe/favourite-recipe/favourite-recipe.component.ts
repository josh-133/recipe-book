import { Component } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';
import { RecipeService } from '../../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-favourite-recipe',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './favourite-recipe.component.html',
  styleUrl: './favourite-recipe.component.css'
})
export class FavouriteRecipeComponent {
  favouriteRecipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.favouriteRecipes = this.recipeService.getAllRecipes().filter(recipe => recipe.favourite);
  }
}
