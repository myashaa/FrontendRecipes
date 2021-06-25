import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { RecipeService } from 'src/app/js/services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe!: RecipeDto;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.getRecipe().then((recipe: RecipeDto) => {
      this.recipe = recipe;
    });
  }

  public deleteRecipe(): void {
    this.recipeService.deleteRecipe();
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }

  public editRecipe(): void {
    this.router.navigate([ProjectUrls.AddUrl, this.recipe.id]);
  }
}
