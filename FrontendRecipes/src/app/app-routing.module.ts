import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectUrls } from './js/constants/projectUrls';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MainComponent } from './pages/main/main.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: `/${ProjectUrls.MainUrl}`, pathMatch: 'full' },
  { path: ProjectUrls.MainUrl, component: MainComponent },
  { path: ProjectUrls.RecipesUrl, component: RecipesComponent },
  { path: `${ProjectUrls.RecipesUrl}${'/:category'}${'/:searchText'}`, component: RecipesComponent },
  { path: `${ProjectUrls.RecipeUrl}${'/:id'}`, component: RecipesComponent },
  { path: ProjectUrls.AddUrl, component: RecipesComponent },
  { path: `${ProjectUrls.AddUrl}${'/:id'}`, component: RecipesComponent },
  { path: ProjectUrls.ProfileUrl, component: RecipesComponent },
  { path: ProjectUrls.FavoritesUrl, component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
