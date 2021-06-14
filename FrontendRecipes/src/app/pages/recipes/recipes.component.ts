import { Component, Input, OnInit } from '@angular/core';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes!: RecipeDto[];
  public currentRecipe!: RecipeDto;

  main!: boolean;
  detailed!: boolean;
  added!: boolean;
  profile!: boolean;

  constructor(private recipeService: RecipeService, private router: Router) { }


  ngOnInit(): void {
    this.recipeService.getRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
    });

    if ((window.location.pathname == `/${ProjectUrls.RecipesUrl}`) && (!this.main)) {
      this.main = true;
      this.detailed = false;
      this.added = false;
      this.profile = false;
    }

    if ((window.location.pathname == `/${ProjectUrls.RecipeUrl}`) && (!this.detailed)) {
      this.main = false;
      this.detailed = true;
      this.added = false;
      this.profile = false;
    }

    if ((window.location.pathname == `/${ProjectUrls.AddUrl}`) && (!this.added)) {
      this.main = false;
      this.added = true;
      this.detailed = false;
      this.profile = false;
    }

    if ((window.location.pathname == `/${ProjectUrls.ProfileUrl}`) && (!this.profile)) {
      this.main = false;
      this.added = false;
      this.detailed = false;
      this.profile = true;
    }
  }

  public showRecipe(recipe: RecipeDto): void {
    this.currentRecipe = recipe;
    this.router.navigate([ProjectUrls.RecipeUrl]);
  }

  public addRecipe(): void {
    this.router.navigate([ProjectUrls.AddUrl]);
  }

  public showRecipes(): void {
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }
}