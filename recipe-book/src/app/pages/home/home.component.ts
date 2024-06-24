import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faStar = faStar

  @Input() recipe!: Recipe;

  recipes: Recipe[];

  constructor(private routerLink: RouterLink, private recipeService: RecipeService) {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
