import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-read-recipe',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './read-recipes.component.html',
  styleUrl: './read-recipes.component.css'
})
export class ReadRecipesComponent implements OnInit {
  faStar = faStar

  @Input() recipe!: Recipe;

  recipes!: Recipe[];

  constructor(private routerModule: RouterModule, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
