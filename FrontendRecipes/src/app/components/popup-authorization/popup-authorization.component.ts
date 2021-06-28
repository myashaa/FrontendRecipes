import { Component, OnInit } from '@angular/core';
import { PopupRegistrationComponent } from '../../components/popup-registration/popup-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { AuthorDto } from 'src/app/js/dto/author.dto';
import { AuthorService } from 'src/app/js/services/author.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup-authorization',
  templateUrl: './popup-authorization.component.html',
  styleUrls: ['./popup-authorization.component.css']
})
export class PopupAuthorizationComponent implements OnInit {

  @ViewChild('login', { static: true }) Login!: ElementRef;
  @ViewChild('password', { static: true }) Password!: ElementRef;
  @ViewChild('button', { static: true }) Button!: ElementRef;

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
  private isAuthor!: boolean;
  private error!: boolean;

  constructor(public dialog: MatDialog, private router: Router, private authorService: AuthorService) { }

  ngOnInit(): void { }

  public openPopupRegistration(): void {
    this.dialog.open(PopupRegistrationComponent);
  }

  public goToProfilePage(): void {
    this.Login.nativeElement.classList.remove('error');
    this.Password.nativeElement.classList.remove('error');
    this.error = false;
    if (this.author.login == "") { this.Login.nativeElement.classList.add('error'); this.error = true; }
    if (this.author.password == "") { this.Password.nativeElement.classList.add('error'); this.error = true; }
    if (!this.error) {
      this.Button.nativeElement.dispatchEvent(new Event("click"));
      this.authorService.checkAuthor(this.author).then((isAuthor: boolean) => {
        this.isAuthor = isAuthor;
        if (this.isAuthor) {
          this.router.navigate([ProjectUrls.ProfileUrl]);
        }
      });
    }
  }

}
