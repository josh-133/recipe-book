import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {
  recipeService: RecipeService = inject(RecipeService)

  applyForm = new FormGroup({
    title: new FormControl(''),
    ingredients: new FormControl(''),
    method: new FormControl('')
  });



  createRecipe() {
    this.recipeService.createRecipe(
      this.applyForm.value.title ?? '',
      this.applyForm.value.ingredients ?? '',
      this.applyForm.value.method ?? '',
    );
  }
}
