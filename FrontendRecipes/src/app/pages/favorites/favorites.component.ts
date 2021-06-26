import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { RecipeService } from 'src/app/js/services/recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  empty: boolean = true;
  public recipes!: RecipeDto[];
  scroll: boolean = false;

  @HostListener("document:scroll") onScroll() {
    this.scroll = true;
    if (document.documentElement.scrollTop == 0) { this.scroll = false; }
  }

  constructor(private recipeService: RecipeService, private router: Router) { }

  public showRecipe(recipe: RecipeDto): void {
    this.router.navigate([ProjectUrls.RecipeUrl, recipe.id]);
  }

  public scrollToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    this.recipeService.getFavoritesRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
      if (this.recipes.length != 0) {
        this.empty = false;
      }
    });
  }
}