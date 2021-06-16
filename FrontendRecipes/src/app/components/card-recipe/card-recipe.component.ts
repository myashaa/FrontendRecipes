import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }


  public switchFavoriteRecipe() {
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
    (this.content.isFavorite)
      ? this.content.isFavorite = false
      : this.content.isFavorite = true;
    (this.isFavoriteRecipe)
      ? this.content.favorites++
      : this.content.favorites--;
  }

  public switchLikedRecipe() {
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
  }

}
