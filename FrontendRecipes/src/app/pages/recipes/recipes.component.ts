import { Component, Input, OnInit } from '@angular/core';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { RecipeService } from 'src/app/js/services/recipe.service';

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

  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.recipeService.getRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
    });

    if ((window.location.pathname == "/added") && (!this.added)) {
      this.main = false;
      this.added = true;
    }
  }

  public showRecipe(recipe: RecipeDto): void {
    this.main = false;
    this.detailed = true;
    this.currentRecipe = recipe;
  }

  public addRecipe(): void {
    this.main = false;
    this.added = true;
  }

  public showRecipes(): void {
    this.main = true;
    this.detailed = false;
    this.added = false;
  }
}