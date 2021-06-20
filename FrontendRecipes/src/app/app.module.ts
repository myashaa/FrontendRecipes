import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './pages/main/main.component';
import { PopupRegistrationComponent } from './components/popup-registration/popup-registration.component';
import { PopupAuthorizationComponent } from './components/popup-authorization/popup-authorization.component';
import { PopupSwitchComponent } from './components/popup-switch/popup-switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { StepRecipeComponent } from './components/step-recipe/step-recipe.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';

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
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
