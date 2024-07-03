import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  recipe: Recipe | undefined;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe
    });
  }

  onSubmit(): void {
    if (this.recipe) {
      this.recipeService.updateRecipe(this.recipe).subscribe(updatedRecipe => {
        console.log('Recipe updated: ', updatedRecipe);
        this.router.navigate(['/read-recipe']);  // Navigate back to recipe page
     });
    }
  }
}
