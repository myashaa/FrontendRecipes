import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../components/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from '../../js/constants/projectUrls';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AuthorService } from 'src/app/js/services/author.service';
import { AuthorDto } from 'src/app/js/dto/author.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('main', { static: true }) Main!: ElementRef;
  @ViewChild('recipes', { static: true }) Recipes!: ElementRef;
  @ViewChild('favorites', { static: true }) Favorites!: ElementRef;

  public author!: AuthorDto;
  public isAuthorized: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private authorService: AuthorService) { }
  
  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
  }

  public goToMainPage(): void {
    this.router.navigate([ProjectUrls.MainUrl]);
  }

  public goToRecipesPage(): void {
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }

  public goToFavoritesPage(): void {
    this.router.navigate([ProjectUrls.FavoritesUrl]);
  }

  public goToProfilePage(): void {
    this.router.navigate([ProjectUrls.ProfileUrl]);
  }

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

}
