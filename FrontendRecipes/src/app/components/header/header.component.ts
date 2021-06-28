import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from '../../js/constants/projectUrls';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AuthorService } from 'src/app/js/services/author.service';
import { AuthorDto } from 'src/app/js/dto/author.dto';
import { PopupAuthorizationComponent } from '../popup-authorization/popup-authorization.component';
import { PopupWarningComponent } from '../popup-warning/popup-warning.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('main', { static: true }) Main!: ElementRef;
  @ViewChild('recipes', { static: true }) Recipes!: ElementRef;
  @ViewChild('favorites', { static: true }) Favorites!: ElementRef;

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
  public isAuthorized: boolean = true;

  constructor(public dialog: MatDialog, private router: Router, private authorService: AuthorService) { }

  ngOnInit(): void {
    if (window.location.pathname == `/${ProjectUrls.MainUrl}`) {
      this.Main.nativeElement.classList.add('active');
      this.Recipes.nativeElement.classList.remove('active');
      this.Favorites.nativeElement.classList.remove('active');
    }

    if (window.location.pathname == `/${ProjectUrls.RecipesUrl}`) {
      this.Recipes.nativeElement.classList.add('active');
      this.Main.nativeElement.classList.remove('active');
      this.Favorites.nativeElement.classList.remove('active');
    }

    if (window.location.pathname == `/${ProjectUrls.FavoritesUrl}`) {
      this.Favorites.nativeElement.classList.add('active');
      this.Main.nativeElement.classList.remove('active');
      this.Recipes.nativeElement.classList.remove('active');
    }

    this.authorService.getAuthor().then((author: AuthorDto) => {
      this.author = author;
    });
  }
  
  public openPopupAuthorization(): void {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public goToMainPage(): void {
    if (window.location.pathname.split("/")[1] == ProjectUrls.AddUrl) {
      this.dialog.open(PopupWarningComponent);
    } else {
      this.router.navigate([ProjectUrls.MainUrl]);
    }
  }

  public goToRecipesPage(): void {
    if (window.location.pathname.split("/")[1] == ProjectUrls.AddUrl) {
      this.dialog.open(PopupWarningComponent);
    } else {
      this.router.navigate([ProjectUrls.RecipesUrl]);
    }
  }

  public goToFavoritesPage(): void {
    if (window.location.pathname.split("/")[1] == ProjectUrls.AddUrl) {
      this.dialog.open(PopupWarningComponent);
    } else {
      this.router.navigate([ProjectUrls.FavoritesUrl]);
    }
  }

  public goToProfilePage(): void {
    if (window.location.pathname.split("/")[1] == ProjectUrls.AddUrl) {
      this.dialog.open(PopupWarningComponent);
    } else {
      this.router.navigate([ProjectUrls.ProfileUrl]);
    }
  }

}
