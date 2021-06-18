import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { RecipeService } from 'src/app/js/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe!: RecipeDto;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    let id = Number(window.location.search.split("=")[1]);
    this.recipeService.getRecipe(id).then((recipe: RecipeDto) => {
      this.recipe = recipe;
    });
  }

  public editRecipe(recipe: RecipeDto): void {
    const path: string = ProjectUrls.AddUrl + "/?id=" + this.recipe.id;
    window.location.href = path;
  }
}
