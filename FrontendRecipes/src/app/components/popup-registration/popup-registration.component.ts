import { Component, OnInit } from '@angular/core';
import { PopupAuthorizationComponent } from '../../components/popup-authorization/popup-authorization.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { Router } from '@angular/router';
import { AuthorDto } from 'src/app/js/dto/author.dto';
import { AuthorService } from 'src/app/js/services/author.service';

@Component({
  selector: 'app-popup-registration',
  templateUrl: './popup-registration.component.html',
  styleUrls: ['./popup-registration.component.css']
})
export class PopupRegistrationComponent implements OnInit {

  public author!: AuthorDto;

  constructor(public dialog: MatDialog, private router: Router, private authorService: AuthorService) {
    this.author = this.getNewAuthor();
  }

  public openPopupAuthorization() {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public goToProfilePage(): void {
    this.authorService.createAuthor(this.author);
    this.router.navigate([ProjectUrls.ProfileUrl]);
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
