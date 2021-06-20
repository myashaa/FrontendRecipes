import { Component, OnInit } from '@angular/core';
import { PopupRegistrationComponent } from '../../components/popup-registration/popup-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { AuthorDto } from 'src/app/js/dto/author.dto';
import { AuthorService } from 'src/app/js/services/author.service';

@Component({
  selector: 'app-popup-authorization',
  templateUrl: './popup-authorization.component.html',
  styleUrls: ['./popup-authorization.component.css']
})
export class PopupAuthorizationComponent implements OnInit {

  public author!: AuthorDto;
  public isAuthor!: boolean;

  constructor(public dialog: MatDialog, private router: Router, private authorService: AuthorService) {
    this.author = this.getNewAuthor();
  }

  public openPopupRegistration() {
    this.dialog.open(PopupRegistrationComponent);
  }

  public goToProfilePage(): void {
    this.authorService.checkAuthor(this.author).then((isAuthor: boolean) => {
      this.isAuthor = isAuthor;
      if (this.isAuthor) {
        this.router.navigate([ProjectUrls.ProfileUrl]);
      }
    });
  }

  private getNewAuthor(): AuthorDto {
    return {
      id: 0,
      name: "",
      login: "",
      password: "",
      description: "",
      amountOfRecipes: 0,
      amountOfLikes: 0,
      amountOfFavorites: 0
    };
  }

  ngOnInit(): void {
  }

}
