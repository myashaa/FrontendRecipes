import { Component, OnInit } from '@angular/core';
import { PopupRegistrationComponent } from '../../components/popup-registration/popup-registration.component';
import { PopupAuthorizationComponent } from '../../components/popup-authorization/popup-authorization.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-switch',
  templateUrl: './popup-switch.component.html',
  styleUrls: ['./popup-switch.component.css']
})
export class PopupSwitchComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void { }

  public openPopupAuthorization(): void {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public openPopupRegistration(): void {
    this.dialog.open(PopupRegistrationComponent);
  }

}
