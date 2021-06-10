import { Component, OnInit } from '@angular/core';
import { PopupSwitchComponent } from '../../directives/popup-switch/popup-switch.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectUrls } from '../../js/constants/projectUrls';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('main', { static: true }) Main!: ElementRef;
  @ViewChild('recipes', { static: true }) Recipes!: ElementRef;

  constructor(public dialog: MatDialog, private router: Router) { }
  
  public openPopupSwitch() {
    this.dialog.open(PopupSwitchComponent);
  }

  public goToMainPage(): void {
    this.router.navigate([ProjectUrls.MainUrl]);
  }

  public goToRecipePage(): void {
    this.router.navigate([ProjectUrls.RecipesUrl]);
  }

  ngOnInit(): void {
    console.log(this.Main);
    if (window.location.pathname == `/${ProjectUrls.MainUrl}`) {
      this.Main.nativeElement.classList.add('active');
      this.Recipes.nativeElement.classList.remove('active');
    }

    if (window.location.pathname == `/${ProjectUrls.RecipesUrl}`) {
      this.Recipes.nativeElement.classList.add('active');
      this.Main.nativeElement.classList.remove('active');
    }

    // if ((window.location.pathname == `/${ProjectUrls.AddUrl}`) && (!this.added)) {
      // this.main = false;
      // this.added = true;
      // this.detailed = false;
    // }
  }

}
