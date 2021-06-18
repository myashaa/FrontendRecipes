import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { IngredientDto } from 'src/app/js/dto/ingredient.dto';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  public recipe!: RecipeDto;

  constructor(private recipeService: RecipeService, private router: Router) {
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
      imageUrl: "assets/images/default.png",
      author: "",
      authorId: 0,
      tags: [],
      favorites: 0,
      isFavorite: false,
      likes: 0,
      isLike: false,
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

  addTag(event: MatChipInputEvent): void {
    const tag: string = (event.value || '').trim();
    // Add our fruit
    if (tag) {
      this.recipe.tags.push(tag);
    }
    // Clear the input value
    event.input.value = '';
  }

  removeTag(tag: string): void {
    const index = this.recipe.tags.indexOf(tag);
    if (index >= 0) {
      this.recipe.tags.splice(index, 1);
    }
  }

  addIngredient(event: MatChipInputEvent, ingredient: IngredientDto): void {
    const item: string = (event.value || '').trim();
    // Add our fruit
    if (item) {
      ingredient.items.push(item);
    }
    // Clear the input value
    event.input.value = '';
  }

  removeIngredient(item: string, ingredient: IngredientDto): void {
    const index = ingredient.items.indexOf(item);
    if (index >= 0) {
      ingredient.items.splice(index, 1);
    }
  }

  ngOnInit(): void {
    if ((window.location.pathname == `/${ProjectUrls.AddUrl}`) && (window.location.search == "")) {
      this.recipe = this.getEmptyRecipe();
    }

    if ((window.location.pathname == `/${ProjectUrls.AddUrl}`) && (window.location.search != "")) {
      let id = Number(window.location.search.split("=")[1]);
      this.recipeService.getRecipe(id).then((recipe: RecipeDto) => {
        this.recipe = recipe;
      });
    }
  }
}