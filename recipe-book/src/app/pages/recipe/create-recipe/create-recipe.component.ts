import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  setFormArray(name: string, value: string[]) {
    const formArray = this.fb.array(
      value.map((value) => this.fb.control(value, Validators.required))
    );
    this.recipeForm?.setControl(name, formArray);
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
    if (this.recipeForm?.valid) {
      const createdRecipe: Recipe = this.recipeForm.value;
      console.log(createdRecipe);
      this.recipeService
        .createRecipe(createdRecipe)
        .subscribe((createdRecipe) => {
          console.log('Recipe created: ', createdRecipe);
          this.router.navigate(['/read-recipes']); // Navigate back to recipe page
        });
    }
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
