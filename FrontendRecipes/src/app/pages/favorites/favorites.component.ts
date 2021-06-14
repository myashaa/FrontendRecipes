import { Component, OnInit } from '@angular/core';
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

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getFavoritesRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
      if (this.recipes.length != 0) {
        this.empty = false;
      }
    });
  }

}