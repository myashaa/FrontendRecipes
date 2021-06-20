import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
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
  @ViewChild('name', { static: true }) Name!: ElementRef;
  @ViewChild('login', { static: true }) Login!: ElementRef;
  @ViewChild('password', { static: true }) Password!: ElementRef;
  @ViewChild('description', { static: true }) Description!: ElementRef;

  public recipes!: RecipeDto[];
  public author!: AuthorDto;
  public flag: boolean = false;

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

  public editProfile(): void {
    if (!this.flag) {
      this.Name.nativeElement.removeAttribute("disabled");
      this.Login.nativeElement.removeAttribute("disabled");
      this.Password.nativeElement.removeAttribute("disabled");
      this.Description.nativeElement.removeAttribute("disabled");
    } else {
      this.Name.nativeElement.setAttribute("disabled", "");
      this.Login.nativeElement.setAttribute("disabled", "");
      this.Password.nativeElement.setAttribute("disabled", "");
      this.Description.nativeElement.setAttribute("disabled", "");

      this.authorService.updateAuthor(this.author);
    }
    this.flag = !this.flag;
  }
}
