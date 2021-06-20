import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }


  public switchFavoriteRecipe(event: any) {
    event.stopPropagation();
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
    (this.content.isFavorite)
      ? this.content.isFavorite = false
      : this.content.isFavorite = true;
    (this.isFavoriteRecipe)
      ? this.content.favorites++
      : this.content.favorites--;
  }

  public switchLikedRecipe(event: any) {
    event.stopPropagation();
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.content.isLike)
      ? this.content.isLike = false
      : this.content.isLike = true;
    (this.isLikedRecipe)
      ? this.content.likes++
      : this.content.likes--;
  }

  ngOnInit(): void {
    (this.content.isFavorite)
      ? this.isFavoriteRecipe = true
      : this.isFavoriteRecipe = false;
    (this.content.isLike)
      ? this.isLikedRecipe = true
      : this.isLikedRecipe = false;
    
    ((window.location.pathname.split("/")[1] == ProjectUrls.RecipeUrl) && (!this.isDetailedRecipe))
      ? this.isDetailedRecipe = true
      : this.isDetailedRecipe = false;
  }
  
  public searchRecipes(event: any): void {
    event.stopPropagation();
  }

}
