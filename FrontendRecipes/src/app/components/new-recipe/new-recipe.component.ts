import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { COMMA, ENTER, L } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { IngredientDto } from 'src/app/js/dto/ingredient.dto';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  @ViewChild('name', { static: true }) Name!: ElementRef;
  @ViewChild('description', { static: true }) Description!: ElementRef;
  @ViewChild('tags', { static: true }) Tags!: ElementRef;
  @ViewChild('cookingTimeInMinutes', { static: true }) CookingTimeInMinutes!: ElementRef;
  @ViewChild('totalPersons', { static: true }) TotalPersons!: ElementRef;
  @ViewChild('ingredient', { static: true }) Ingredient!: ElementRef;
  // @ViewChild('ingredientTitle', { static: true }) IngredientTitle!: ElementRef;
  // @ViewChild('ingredientItems', { static: true }) IngredientItems!: ElementRef;
  @ViewChild('step', { static: true }) Step!: ElementRef;
  // @ViewChild('stepDescription', { static: true }) StepDescription!: ElementRef;

  public recipe: RecipeDto = {
    id: 0,
    imageUrl: "assets/images/default.png",
    author: "",
    tags: "",
    favorites: 0,
    likes: 0,
    name: "",
    description: "",
    cookingTimeInMinutes: 0,
    totalPersons: 0,
    ingredients: [],
    steps: []
  };
  private error!: boolean;
  private maxLength: number = 0;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if ((window.location.pathname.split("/")[1] == ProjectUrls.AddUrl) && (window.location.pathname.split("/")[2] != null)) {
      let id = this.route.snapshot.params['id'];
      this.recipeService.getRecipe(id).subscribe((recipe: RecipeDto) => {
        this.recipe = recipe;
      });
    }
  }

  public addTitle(): void {
    this.Ingredient.nativeElement.classList.remove('error');
    this.recipe.ingredients.push({
      title: "",
      items: ""
    });
  }

  public deleteTitle(block: number): void {
    this.recipe.ingredients.splice(block, 1);
  }

  public addStep(): void {
    this.Step.nativeElement.classList.remove('error');
    this.recipe.steps.push({
      number: this.recipe.steps.length,
      description: ""
    });
  }

  public deleteStep(step: number): void {
    this.recipe.steps.splice(step, 1);
  }

  public addRecipe(): void {
    this.Name.nativeElement.classList.remove('error');
    this.Description.nativeElement.classList.remove('error');
    this.Tags.nativeElement.classList.remove('error');
    this.CookingTimeInMinutes.nativeElement.classList.remove('error');
    this.TotalPersons.nativeElement.classList.remove('error');
    this.error = false;
    if (this.recipe.name == "") { this.Name.nativeElement.classList.add('error'); this.error = true; }
    if (this.recipe.description == "") { this.Description.nativeElement.classList.add('error'); this.error = true; }
    if (this.recipe.tags.length == 0) { this.Tags.nativeElement.classList.add('error'); this.error = true; }
    if (this.recipe.cookingTimeInMinutes == 0) { this.CookingTimeInMinutes.nativeElement.classList.add('error'); this.error = true }
    if (this.recipe.totalPersons == 0) { this.TotalPersons.nativeElement.classList.add('error'); this.error = true }
    if (this.recipe.ingredients.length == 0) { this.Ingredient.nativeElement.classList.add('error'); this.error = true }
    for (let ingredient of this.recipe.ingredients) {
      if (ingredient.items.length == 0) { this.error = true }
      if (ingredient.title == "") { this.error = true }
    }
    if (this.recipe.steps.length == 0) { this.Step.nativeElement.classList.add('error'); this.error = true; }
    for (let step of this.recipe.steps) {
      if (step.description == "") { this.error = true; }
    }

    if (!this.error)
    {
      this.recipeService.addRecipe(this.recipe);
      // this.router.navigate([ProjectUrls.RecipesUrl]);
    }
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  addTag(event: MatChipInputEvent): void {
    const tag: string = (event.value || '').trim();
    if ((tag) && (this.maxLength + tag.length <= 40)) {
      this.maxLength += tag.length;
      this.recipe.tags = this.recipe.tags + "," + tag;
    }
      event.input.value = '';
  }

  removeTag(tag: string): void {
    let tags = this.recipe.tags.split(",");
    const index = tags.indexOf(tag);
    if (index >= 0) {
      tags.splice(index, 1);
      this.recipe.tags = tags.join();
    }
  }

  addIngredient(event: MatChipInputEvent, ingredient: IngredientDto): void {
    const item: string = (event.value || '').trim();
    if ((item) && (ingredient.items.split(",").length <= 20)) {
      ingredient.items = ingredient.items + "," + item;
    }
      event.input.value = '';
  }

  removeIngredient(item: string, ingredient: IngredientDto): void {
    let ingredients = ingredient.items.split(",");
    const index = ingredients.indexOf(item);
    if (index >= 0) {
      ingredients.splice(index, 1);
      ingredient.items = ingredients.join();
    }
  }

}