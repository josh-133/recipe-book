import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faStar = faStar

  @Input() recipe!: Recipe;

  recipes: Recipe[];

  constructor(private routerModule: RouterModule, private recipeService: RecipeService) {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
