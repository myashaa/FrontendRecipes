import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './directives/header/header.component';
import { FooterComponent } from './directives/footer/footer.component';
import { SearchComponent } from './directives/search/search.component';
import { MainComponent } from './pages/main/main.component';
import { PopupRegistrationComponent } from './directives/popup-registration/popup-registration.component';
import { PopupAuthorizationComponent } from './directives/popup-authorization/popup-authorization.component';
import { PopupSwitchComponent } from './directives/popup-switch/popup-switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CardRecipeComponent } from './directives/card-recipe/card-recipe.component';
import { RecipeComponent } from './directives/recipe/recipe.component';
import { StepRecipeComponent } from './directives/step-recipe/step-recipe.component';
import { ProfileComponent } from './directives/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NewRecipeComponent } from './directives/new-recipe/new-recipe.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MainComponent,
    PopupRegistrationComponent,
    PopupAuthorizationComponent,
    PopupSwitchComponent,
    RecipesComponent,
    CardRecipeComponent,
    RecipeComponent,
    StepRecipeComponent,
    ProfileComponent,
    NewRecipeComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
