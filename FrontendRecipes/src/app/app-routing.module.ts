import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectUrls } from './js/constants/projectUrls';
import { MainComponent } from './pages/main/main.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: `/${ProjectUrls.MainUrl}`, pathMatch: 'full' },
  { path: ProjectUrls.MainUrl, component: MainComponent },
  { path: ProjectUrls.RecipesUrl, component: RecipesComponent },
  { path: ProjectUrls.RecipeUrl, component: RecipesComponent },
  { path: ProjectUrls.AddUrl, component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
