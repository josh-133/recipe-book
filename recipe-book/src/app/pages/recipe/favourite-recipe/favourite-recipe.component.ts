import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';
import { RecipeService } from '../../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-favourite-recipe',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './favourite-recipe.component.html',
  styleUrl: './favourite-recipe.component.css'
})
export class FavouriteRecipeComponent implements OnInit {
  favouriteRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes()
      .pipe(
        map(recipes => recipes.filter(recipe => recipe.favourite))
      )
      .subscribe((filteredRecipes) => {
        this.favouriteRecipes = filteredRecipes
      })
  }

}
