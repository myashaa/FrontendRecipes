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

  main: boolean = true;
  detailed: boolean = false;
  added: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) { }


  ngOnInit(): void {
    this.recipeService.getRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
    });

    if ((window.location.pathname == `/${ProjectUrls.RecipesUrl}`) && (!this.main)) {
      this.main = true;
      this.detailed = false;
      this.added = false;
    }

    // if ((window.location.pathname == `/${ProjectUrls.RecipesUrl}`) && (!this.detailed)) {
    //   this.main = false;
    //   this.detailed = true;
    //   this.added = false;
    // }

    if ((window.location.pathname == `/${ProjectUrls.AddUrl}`) && (!this.added)) {
      this.main = false;
      this.added = true;
      this.detailed = false;
    }
  }

  public showRecipe(recipe: RecipeDto): void {
    this.main = false;
    this.detailed = true;
    this.currentRecipe = recipe;
    // this.router.navigate([ProjectUrls.RecipeUrl]);
    // this.currentRecipe = recipe;
  }

  public addRecipe(): void {
    // this.main = false;
    // this.added = true;
    this.router.navigate([ProjectUrls.AddUrl]);
  }

  public showRecipes(): void {
  //   this.main = true;
  //   this.detailed = false;
  //   this.added = false;
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }
}