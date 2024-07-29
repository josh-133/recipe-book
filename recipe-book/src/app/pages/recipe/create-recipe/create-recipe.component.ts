import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {

  constructor(private recipeService: RecipeService, private router: Router) {}

  newRecipe: Recipe = {
    id: 0,
    title: '',
    description: '',
    ingredients: '',
    method: '',
    favourite: false
  }; 

  onSubmit() {
    this.recipeService.addRecipe(this.newRecipe).subscribe(createdRecipe => {
      console.log('Recipe created: ', createdRecipe);
      this.router.navigate(['/read-recipes']);  // Navigate back to home page
      this.resetForm();
    })
  }

  resetForm() {
    this.newRecipe = {
      id: 0,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      favourite: false
    }
  }
}
