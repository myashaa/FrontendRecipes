import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../directives/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {}

  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
  }

  public goToAddRecipe(): void {
    this.router.navigate(['recipe/added']);
  }

  ngOnInit(): void {
  }

}
