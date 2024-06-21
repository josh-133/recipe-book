import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRecipeComponent } from './pages/recipe/create-recipe/create-recipe.component';
import { ReadRecipeComponent } from './pages/recipe/read-recipe/read-recipe.component';
import { UpdateRecipeComponent } from './pages/recipe/update-recipe/update-recipe.component';
import { FavouriteRecipeComponent } from './pages/recipe/favourite-recipe/favourite-recipe.component';

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
        path: 'read-recipe',
        component: ReadRecipeComponent,
        title: 'Read Recipe'
    },
    {
        path: 'update-recipe',
        component: UpdateRecipeComponent,
        title: 'Update Recipe'
    },
    {
        path: 'favourite-recipe',
        component: FavouriteRecipeComponent,
        title: 'Favourite Recipe'
    }
];
