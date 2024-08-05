import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
    // this.recipeForm = this.fb.group({
    //   title: ['', Validators.required],
    //   ingredients: this.fb.array([this.fb.control('', Validators.required)]),
    //   method: this.fb.array([this.fb.control('', Validators.required)])
    // });
  }

  ngOnInit(): void {
    this.initializeForm();
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe
    });
  }

  initializeForm() {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      ingredients: this.fb.array([]),
      method: this.fb.array([]),
      favourite: false
    });
  }

  populateForm(recipe: Recipe) {
    if (this.recipeForm) {  
      this.recipeForm.patchValue({
        title: recipe.title,
        favourite: recipe.favourite
      });

      const ingredientsArray = recipe.ingredients as string[];
      const methodArray = recipe.method as string[];       

      const ingredientsFormArray = this.fb.array(
        ingredientsArray.map((ingredient: string) => this.fb.control(ingredient, Validators.required))
      );
      this.recipeForm.setControl('ingredients', ingredientsFormArray);
      
      const methodFormArray = this.fb.array(
        methodArray.map((step: string) => this.fb.control(step, Validators.required))
      );
      this.recipeForm.setControl('method', methodFormArray);
    }
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
