import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component'
import { ReadRecipesComponent } from './pages/recipe/read-recipes/read-recipes.component';
import { UpdateRecipeComponent } from './pages/recipe/update-recipe/update-recipe.component';
import { FavouriteRecipeComponent } from './pages/recipe/favourite-recipe/favourite-recipe.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, ReadRecipesComponent, UpdateRecipeComponent, FavouriteRecipeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
}
