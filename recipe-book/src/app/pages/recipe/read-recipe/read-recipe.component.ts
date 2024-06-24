import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-read-recipe',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './read-recipe.component.html',
  styleUrl: './read-recipe.component.css'
})
export class ReadRecipeComponent implements OnInit {
  faStar = faStar

  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipeById(id)
    })
  }
}
