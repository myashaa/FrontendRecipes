import { Component, OnInit } from '@angular/core';
import { PopupRegistrationComponent } from '../../directives/popup-registration/popup-registration.component';
import { PopupAuthorizationComponent } from '../../directives/popup-authorization/popup-authorization.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-switch',
  templateUrl: './popup-switch.component.html',
  styleUrls: ['./popup-switch.component.css']
})
export class PopupSwitchComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  public openPopupAuthorization() {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public openPopupRegistration() {
    this.dialog.open(PopupRegistrationComponent);
  }

  ngOnInit(): void {
  }

}
