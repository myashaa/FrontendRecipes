import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../components/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public recipe!: RecipeDto;
  isLikedRecipe!: boolean;
  scroll: boolean = false;

  @HostListener("document:scroll") onScroll() {
    this.scroll = true;
    if (document.documentElement.scrollTop == 0) { this.scroll = false; }
  }

  constructor(public dialog: MatDialog, private router: Router, private recipeService: RecipeService) {}

  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
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

  public switchLikedRecipe(event: any) {
    event.stopPropagation();
    this.isLikedRecipe = !this.isLikedRecipe;
    (this.isLikedRecipe)
      ? this.recipe.likes++
      : this.recipe.likes--;
  }

  public scrollToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    this.recipeService.getFavoriteRecipe().then((recipe: RecipeDto) => {
      this.recipe = recipe;
    });
  }
}
