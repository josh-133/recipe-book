import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faStar = faStar

  @Input() recipe!: Recipe;

  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Recipe 1',
      ingredients: '1x egg',
      method: '1. Crack egg.',
      favourite: false
    },
    {
      id: 2,
      title: 'Recipe 2',
      ingredients: '2x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 3,
      title: 'Recipe 3',
      ingredients: '3x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 4,
      title: 'Recipe 4',
      ingredients: '4x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 5,
      title: 'Recipe 5',
      ingredients: '5x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 6,
      title: 'Recipe 6',
      ingredients: '6x eggs',
      method: '1. Crack eggs.',
      favourite: false
    },
    {
      id: 7,
      title: 'Recipe 7',
      ingredients: '7x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 8,
      title: 'Recipe 8',
      ingredients: '8x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 9,
      title: 'Recipe 9',
      ingredients: '9x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 10,
      title: 'Recipe 10',
      ingredients: '10x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 11,
      title: 'Recipe 11',
      ingredients: '11x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
    {
      id: 12,
      title: 'Recipe 12',
      ingredients: '12x eggs',
      method: '1. Crack eggs.',
      favourite: true
    },
  ]
}
