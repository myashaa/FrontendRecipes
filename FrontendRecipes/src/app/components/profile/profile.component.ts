import { Component, OnInit } from '@angular/core';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { AuthorDto } from 'src/app/js/dto/author.dto';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';
import { AuthorService } from 'src/app/js/services/author.service';
import { RecipeService } from 'src/app/js/services/recipe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public recipes!: RecipeDto[];
  public author!: AuthorDto;

  constructor(private recipeService: RecipeService, private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.recipeService.getAuthorRecipes().then((recipes: RecipeDto[]) => {
      this.recipes = recipes;
    });

    this.authorService.getAuthor().then((author: AuthorDto) => {
      this.author = author;
    });
  }

  public showRecipe(recipe: RecipeDto): void {
    const path: string = ProjectUrls.RecipesUrl + "/?id=" + recipe.id;
    window.location.href = path;
  }
}
