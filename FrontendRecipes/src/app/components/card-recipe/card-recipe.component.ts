import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.css']
})
export class CardRecipeComponent implements OnInit {

  @Input() content!: RecipeDto;

  public isFavoriteRecipe!: boolean;
  public isLikedRecipe!: boolean;
  public isDetailedRecipe!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    (window.location.pathname.split("/")[1] == ProjectUrls.RecipeUrl)
      ? this.isDetailedRecipe = true
      : this.isDetailedRecipe = false;
  }

  public switchFavoriteRecipe(event: any): void {
    event.stopPropagation();
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
    (this.isFavoriteRecipe)
      ? this.content.favorites++
      : this.content.favorites--;
  }

  public switchLikedRecipe(event: any): void {
    event.stopPropagation();
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.isLikedRecipe)
      ? this.content.likes++
      : this.content.likes--;
  }
  
  public searchRecipes(event: any, category: string, searchText: string): void {
    this.router.navigate([ProjectUrls.RecipesUrl, category, searchText]);
    event.stopPropagation();
  }
  
}
