import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  public recipe: RecipeDto;

  constructor(private recipeService: RecipeService) {
    this.recipe = this.getEmptyRecipe();
  }

  public addTitle() {
    this.recipe.ingredients.push({
      title: "",
      items: []
    });
  }

  public deleteTitle(block: number)
  {
    this.recipe.ingredients.splice(block, 1);
  }
  
  public addStep()
  {
    this.recipe.steps.push({
      number: this.recipe.steps.length,
      description: ""
    });
  }

  public deleteStep(step: number)
  {
     this.recipe.steps.splice(step, 1);
  }

  private getEmptyRecipe(): RecipeDto {
    return {
      id: 0,
      imageUrl: "",
      author: "",
      tags: [],
      favorites: 0,
      likes: 0,
      name: "",
      description: "",
      cookingTimeInMinutes: 0,
      totalPersons: 0,
      ingredients: [],
      steps: []
    };
  }
  
  ngOnInit(): void {
  }
}