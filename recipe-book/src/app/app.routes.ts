import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRecipeComponent } from './pages/recipe/create-recipe/create-recipe.component';
import { ReadRecipesComponent } from './pages/recipe/read-recipes/read-recipes.component';
import { ReadRecipeComponent } from './pages/recipe/read-recipe/read-recipe.component';
import { UpdateRecipeComponent } from './pages/recipe/update-recipe/update-recipe.component';

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
    },
    {
        path: 'read-recipes',
        component: ReadRecipesComponent,
        title: 'Read Recipes'
    },
    {
        path: 'read-recipe/:id',
        component: ReadRecipeComponent,
        title: 'Read Recipe'
    },
    {
        path: 'update-recipe/:id',
        component: UpdateRecipeComponent,
        title: 'Update Recipe'
    }
];
