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

  isFavoriteRecipe!: boolean;
  isLikedRecipe!: boolean;
  isDetailedRecipe!: boolean;

  constructor(private router: Router) { }


  public switchFavoriteRecipe(event: any) {
    event.stopPropagation();
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
    (this.isFavoriteRecipe)
      ? this.content.favorites++
      : this.content.favorites--;
  }

  public switchLikedRecipe(event: any) {
    event.stopPropagation();
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.isLikedRecipe)
      ? this.content.likes++
      : this.content.likes--;
  }

  ngOnInit(): void {
    ((window.location.pathname.split("/")[1] == ProjectUrls.RecipeUrl) && (!this.isDetailedRecipe))
      ? this.isDetailedRecipe = true
      : this.isDetailedRecipe = false;
  }
  
  public searchRecipes(event: any, category: string, searchText: string): void {
    this.router.navigate([ProjectUrls.RecipesUrl, category, searchText]);
    event.stopPropagation();
  }

}
