import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from './card-recipe';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.css']
})
export class CardRecipeComponent implements OnInit {

  @Input() content!: CardContent;

  isFavoriteRecipe: boolean = true;
  isLikedRecipe: boolean = true;
   
  switchFavoriteRecipe()
  {
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
  }

  switchLikedRecipe()
  {
    this.isLikedRecipe = !this.isLikedRecipe;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
