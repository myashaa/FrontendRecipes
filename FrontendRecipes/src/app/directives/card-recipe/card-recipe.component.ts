import { Component, OnInit, Input } from '@angular/core';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.css']
})
export class CardRecipeComponent implements OnInit {

  @Input() content!: RecipeDto;

  isFavoriteRecipe: boolean = true;
  isLikedRecipe: boolean = true;

  constructor() { }


  public switchFavoriteRecipe() {
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
    (this.isFavoriteRecipe)
      ? this.content.favorites--
      : this.content.favorites++
  }

  public switchLikedRecipe() {
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.isLikedRecipe)
      ? this.content.likes--
      : this.content.likes++
  }

  ngOnInit(): void {
  }

}
