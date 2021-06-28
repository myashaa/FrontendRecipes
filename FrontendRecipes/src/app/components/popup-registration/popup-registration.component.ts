import { Component, OnInit } from '@angular/core';
import { PopupAuthorizationComponent } from '../../components/popup-authorization/popup-authorization.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { Router } from '@angular/router';
import { AuthorDto } from 'src/app/js/dto/author.dto';
import { AuthorService } from 'src/app/js/services/author.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup-registration',
  templateUrl: './popup-registration.component.html',
  styleUrls: ['./popup-registration.component.css']
})
export class PopupRegistrationComponent implements OnInit {
  
  @ViewChild('name', { static: true }) Name!: ElementRef;
  @ViewChild('login', { static: true }) Login!: ElementRef;
  @ViewChild('password', { static: true }) Password!: ElementRef;
  @ViewChild('passwordCopy', { static: true }) PasswordCopy!: ElementRef;
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
  public copyText: string = "";
  private error!: boolean;

  constructor(public dialog: MatDialog, private router: Router, private authorService: AuthorService) { }

  ngOnInit(): void { }

  public openPopupAuthorization(): void {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public goToProfilePage(): void {
    this.Name.nativeElement.classList.remove('error');
    this.Login.nativeElement.classList.remove('error');
    this.Password.nativeElement.classList.remove('error');
    this.PasswordCopy.nativeElement.classList.remove('error');
    this.error = false;
    if (this.author.name == "") { this.Name.nativeElement.classList.add('error'); this.error = true; }
    if (this.author.login == "") { this.Login.nativeElement.classList.add('error'); this.error = true; }
    if (this.author.password.length < 8) { this.Password.nativeElement.classList.add('error'); this.error = true; }
    if (this.copyText.length < 8) { this.PasswordCopy.nativeElement.classList.add('error'); this.error = true; }
    if (this.copyText != this.author.password) { this.PasswordCopy.nativeElement.classList.add('error'); this.error = true; }
    if (!this.error) {
      this.Button.nativeElement.dispatchEvent(new Event("click"));
      this.authorService.createAuthor(this.author);
      this.router.navigate([ProjectUrls.ProfileUrl]);
    }
  }

}
