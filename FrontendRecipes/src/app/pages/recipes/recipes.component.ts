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

  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.recipeService.getRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
    });
  }

  public showRecipe(card: RecipeDto) {
    this.main = false;
    this.detailed = true;
    this.currentRecipe = card;
  }

  public showRecipes() {
    this.main = true;
    this.detailed = false;
  }
}
