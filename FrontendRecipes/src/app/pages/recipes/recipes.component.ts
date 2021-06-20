import { Component, OnInit } from '@angular/core';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes!: RecipeDto[];

  main!: boolean;
  detailed!: boolean;
  added!: boolean;
  profile!: boolean;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    if ((window.location.pathname.split("/")[1] == ProjectUrls.RecipesUrl) && (window.location.pathname.split("/")[2] == null) && (!this.main)) {
      this.main = true;
      this.detailed = false;
      this.added = false;
      this.profile = false;
      this.recipeService.getFourRecipes().then((recipes: RecipeDto[]) => {
        this.recipes = recipes;
      });
    }

    if ((window.location.pathname.split("/")[1] == ProjectUrls.RecipesUrl) && (window.location.pathname.split("/")[2] != null) && (!this.detailed)) {
      this.main = true;
      this.detailed = false;
      this.added = false;
      this.profile = false;
      let text = this.route.snapshot.params['searchText']
      this.recipeService.searchFourRecipes(text).then((recipes: RecipeDto[]) => {
        this.recipes = recipes;
      });      
    }

    if ((window.location.pathname.split("/")[1] == ProjectUrls.RecipeUrl) && (!this.detailed)) {
      this.main = false;
      this.detailed = true;
      this.added = false;
      this.profile = false;
    }

    if ((window.location.pathname.split("/")[1] == ProjectUrls.AddUrl) && (!this.added)) {
      this.main = false;
      this.added = true;
      this.detailed = false;
      this.profile = false;
    }

    if ((window.location.pathname == `/${ProjectUrls.ProfileUrl}`) && (!this.profile)) {
      this.main = false;
      this.added = false;
      this.detailed = false;
      this.profile = true;
    }
  }

  public addRecipe(): void {
    this.router.navigate([ProjectUrls.AddUrl]);
  }

  public showRecipes(): void {
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }

  public showMoreRecipes(): void {
    if ((window.location.pathname.split("/")[1] == ProjectUrls.RecipesUrl) && (window.location.pathname.split("/")[2] == null)) {
      this.recipeService.getFourRecipes().then((recipes: RecipeDto[]) => {
        let container = this.recipes.concat(recipes);
        this.recipes = container;
      });
    }

    if ((window.location.pathname.split("/")[1] == ProjectUrls.RecipesUrl) && (window.location.pathname.split("/")[2] != null)) {
      let text = this.route.snapshot.params['searchText'];
      text = text.replace(/%20/g, " ");
      this.recipeService.searchFourRecipes(text).then((recipes: RecipeDto[]) => {
        let container = this.recipes.concat(recipes);
        this.recipes = container;
      });
    }
  }
}