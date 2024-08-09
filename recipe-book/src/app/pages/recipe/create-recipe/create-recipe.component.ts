import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css',
})
export class CreateRecipeComponent {
  recipe: Recipe | undefined;
  recipeForm: FormGroup | undefined;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  newRecipe: Recipe = {
    id: '0',
    title: '',
    description: '',
    ingredients: [],
    method: [],
    favourite: false,
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.initializeForm();

    this.recipeService.getRecipeById(id).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  initializeForm() {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
      method: this.fb.array([]),
      favourite: false,
    });
  }

  get ingredients(): FormArray | undefined {
    return this.recipeForm?.get('ingredients') as FormArray;
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
      return undefined;
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

  onSubmit() {
    this.recipeService.addRecipe(this.newRecipe).subscribe((createdRecipe) => {
      console.log('Recipe created: ', createdRecipe);
      this.router.navigate(['/read-recipes']); // Navigate back to home page
      this.resetForm();
    });
  }

  resetForm() {
    this.newRecipe = {
      id: '0',
      title: '',
      description: '',
      ingredients: [],
      method: [],
      favourite: false,
    };
  }
}
