import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild('name', { static: true }) Name!: ElementRef;
  @ViewChild('login', { static: true }) Login!: ElementRef;
  @ViewChild('password', { static: true }) Password!: ElementRef;
  @ViewChild('description', { static: true }) Description!: ElementRef;

  public recipes!: RecipeDto[];
  public author: AuthorDto = {
    id: 0,
    name: "",
    login: "",
    password: "",
    description: "",
    amountOfRecipes: 0,
    amountOfLikes: 0,
    amountOfFavorites: 0
  };
  public loading: boolean = true;
  private protection: boolean = true;
  private error!: boolean;

  constructor(private recipeService: RecipeService, private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.authorService.getAuthor().then((author: AuthorDto) => {
      this.author = author;
      this.recipeService.searchFourRecipes('author', this.author.login).subscribe((recipes: RecipeDto[]) => {
        this.recipes = recipes;
        if ((this.recipes != undefined) && (this.recipes.length > 0)) {
          this.loading = false;
        }
      });
    });
  }

  public showRecipe(recipe: RecipeDto): void {
    this.router.navigate([ProjectUrls.RecipeUrl, recipe.id]);
  }

  public editProfile(): void {
    console.log(this.protection);
    if (this.protection) {
      this.Name.nativeElement.removeAttribute("disabled");
      this.Login.nativeElement.removeAttribute("disabled");
      this.Password.nativeElement.removeAttribute("disabled");
      this.Description.nativeElement.removeAttribute("disabled");
      this.protection = false;
    } else {
      this.Name.nativeElement.classList.remove('error');
      this.Login.nativeElement.classList.remove('error'); 
      this.Password.nativeElement.classList.remove('error');

      this.error = false;
      if (this.author.name == "") { this.Name.nativeElement.classList.add('error'); this.error = true; }
      if (this.author.login == "") { this.Login.nativeElement.classList.add('error'); this.error = true; }
      if (this.author.password.length < 8) { this.Password.nativeElement.classList.add('error'); this.error = true; }
      if (!this.error) {
        this.Name.nativeElement.setAttribute("disabled", "");
        this.Login.nativeElement.setAttribute("disabled", "");
        this.Password.nativeElement.setAttribute("disabled", "");
        this.Description.nativeElement.setAttribute("disabled", "");
        this.authorService.updateAuthor(this.author);
        this.protection = true;
      }
    }
  }
  
}
