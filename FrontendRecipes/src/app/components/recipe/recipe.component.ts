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

  public recipe: RecipeDto = {
    id: 0,
    imageUrl: "assets/images/default.png",
    author: "",
    tags: "",
    favorites: 0,
    likes: 0,
    name: "",
    description: "",
    cookingTimeInMinutes: 0,
    totalPersons: 0,
    ingredients: [],
    steps: []
  };

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.recipeService.getRecipe(id).subscribe((recipe: RecipeDto) => {
      this.recipe = recipe;
    });
  }

  public deleteRecipe(): void {
    let id = this.route.snapshot.params['id'];
    this.recipeService.deleteRecipe(id);
    // this.router.navigate([ProjectUrls.RecipesUrl]);
  }

  public editRecipe(): void {
    this.router.navigate([ProjectUrls.AddUrl, this.recipe.id]);
  }
  
}
