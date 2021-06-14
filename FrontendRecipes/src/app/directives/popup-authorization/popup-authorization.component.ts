import { Component, OnInit } from '@angular/core';
import { PopupRegistrationComponent } from '../../directives/popup-registration/popup-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';

@Component({
  selector: 'app-popup-authorization',
  templateUrl: './popup-authorization.component.html',
  styleUrls: ['./popup-authorization.component.css']
})
export class PopupAuthorizationComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {}

  public openPopupRegistration() {
    this.dialog.open(PopupRegistrationComponent);
  }

  public goToProfilePage(): void {
    this.router.navigate([ProjectUrls.ProfileUrl]);
  }

  ngOnInit(): void {
  }

}
