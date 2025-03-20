import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component'
import { ReadRecipeComponent } from './pages/recipe/read-recipe/read-recipe.component';
import { UpdateRecipeComponent } from './pages/recipe/update-recipe/update-recipe.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ReadRecipeComponent, UpdateRecipeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
}
