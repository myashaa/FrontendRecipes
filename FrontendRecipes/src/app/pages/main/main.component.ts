import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../directives/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
  }

  ngOnInit(): void {
  }

}
