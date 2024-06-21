import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() recipe!: Recipe;

  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Recipe 1',
      ingredients: '1x egg',
      method: '1. Crack egg.',
      favourite: true
    }
  ]
}
