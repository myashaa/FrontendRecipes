import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../directives/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {}

  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
  }

  public goToMainPage(): void {
    this.router.navigate(['main']);
  }

  public goToRecipePage(): void {
    this.router.navigate(['recipe']);
  }

  ngOnInit(): void {
  }

}
