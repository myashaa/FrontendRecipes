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
    let id = this.route.snapshot.params['id'];
    this.recipeService.getRecipe(id).then((recipe: RecipeDto) => {
      this.recipe = recipe;
    });
  }

  public deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id);
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }
}
