import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  public recipe: RecipeDto;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipe = this.getEmptyRecipe();
  }

  public addTitle(): void {
    this.recipe.ingredients.push({
      title: "",
      items: []
    });
  }

  public deleteTitle(block: number): void {
    this.recipe.ingredients.splice(block, 1);
  }

  public addStep(): void {
    this.recipe.steps.push({
      number: this.recipe.steps.length,
      description: ""
    });
  }

  public deleteStep(step: number): void {
    this.recipe.steps.splice(step, 1);
  }

  public addRecipe(): void {
    this.recipeService.addRecipe(this.recipe);
    this.router.navigate([ProjectUrls.RecipesUrl]);
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

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    // event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }
}