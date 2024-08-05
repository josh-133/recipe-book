import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent implements OnInit {
  
  recipe: Recipe | undefined;
  recipeForm: FormGroup | undefined;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),
      method: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe
    });
  }

  get ingredients(): FormArray | undefined {
    if (this.recipeForm) {
      return this.recipeForm.get('ingredients') as FormArray;
    } else {
      return undefined
    }
  }

  addIngredient(): void {
    if (this.ingredients) {
      this.ingredients.push(this.fb.control('', Validators.required));
    }
  }

  removeIngredient(index: number): void {
    if (this.ingredients) {
      this.ingredients.removeAt(index);
    }
  }

  get method(): FormArray | undefined {
    if (this.recipeForm) {
      return this.recipeForm.get('method') as FormArray;
    } else {
      return undefined
    }
  }

  addStep(): void {
    if (this.method) {
      this.method.push(this.fb.control('', Validators.required));
    }
  }

  removeStep(index: number): void {
    if (this.method) {
      this.method.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.recipe) {
      this.recipeService.updateRecipe(this.recipe).subscribe(updatedRecipe => {
        console.log('Recipe updated: ', updatedRecipe);
        this.router.navigate(['/read-recipes']);  // Navigate back to recipe page
     });
    }
  }

  deleteRecipe(): void {
    if (this.recipe) {
      this.recipeService.deleteRecipe(this.recipe.id).subscribe(deletedRecipe => {
        console.log('Recipe deleted: ', deletedRecipe);
        this.router.navigate(['/read-recipes']);  // Navigate back to recipe page
      })
    }
  }
}
