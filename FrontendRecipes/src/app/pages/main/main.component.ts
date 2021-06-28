import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { HostListener } from '@angular/core';
import { PopupAuthorizationComponent } from 'src/app/components/popup-authorization/popup-authorization.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @HostListener("document:scroll") onScroll() {
    this.scroll = true;
    if (document.documentElement.scrollTop == 0) { this.scroll = false; }
  }

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
  public isLikedRecipe!: boolean;
  public scroll: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private recipeService: RecipeService) { } 

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    this.recipeService.getFavoriteRecipe().subscribe((recipe: RecipeDto) => {
      this.recipe = recipe;
    });
  }

  public openPopupAuthorization(): void {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public goToAddRecipe(): void {
    this.router.navigate([ProjectUrls.AddUrl]);
  }

  public showRecipe(): void {
    this.router.navigate([ProjectUrls.RecipeUrl, this.recipe.id]);
  }

  public searchRecipes(event: any, category: string, searchText: string): void {
    this.router.navigate([ProjectUrls.RecipesUrl, category, searchText]);
    event.stopPropagation();
  }

  public switchLikedRecipe(event: any): void {
    event.stopPropagation();
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.isLikedRecipe)
      ? this.recipe.likes++
      : this.recipe.likes--;
  }

  public scrollToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
