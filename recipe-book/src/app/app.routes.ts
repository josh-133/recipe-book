import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRecipeComponent } from './pages/recipe/create-recipe/create-recipe.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'create-recipe',
        component: CreateRecipeComponent,
        title: 'Create Recipe'
    }
];
