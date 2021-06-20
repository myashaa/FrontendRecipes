import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../components/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public recipe!: RecipeDto;
  isLikedRecipe!: boolean;

  constructor(public dialog: MatDialog, private router: Router, private recipeService: RecipeService) {}

  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
  }

  public goToAddRecipe(): void {
    this.router.navigate([ProjectUrls.AddUrl]);
  }

  public switchLikedRecipe(event: any) {
    event.stopPropagation();
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.recipe.isLike)
      ? this.recipe.isLike = false
      : this.recipe.isLike = true;
    (this.isLikedRecipe)
      ? this.recipe.likes++
      : this.recipe.likes--;
  }

  ngOnInit(): void {
    this.recipeService.getFavoriteRecipe().then((recipe: RecipeDto) => {
      this.recipe = recipe;
    });

    (this.recipe.isLike)
      ? this.isLikedRecipe = true
      : this.isLikedRecipe = false;
  }

  public searchRecipes(event: any): void {
    event.stopPropagation();
  }
}
