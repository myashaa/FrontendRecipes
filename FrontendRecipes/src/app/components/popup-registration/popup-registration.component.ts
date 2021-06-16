import { Component, OnInit } from '@angular/core';
import { PopupAuthorizationComponent } from '../../components/popup-authorization/popup-authorization.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-registration',
  templateUrl: './popup-registration.component.html',
  styleUrls: ['./popup-registration.component.css']
})
export class PopupRegistrationComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {}

  public openPopupAuthorization() {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public goToProfilePage(): void {
    this.router.navigate([ProjectUrls.ProfileUrl]);
  }

  ngOnInit(): void {
  }

}
