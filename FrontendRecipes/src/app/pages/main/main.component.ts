import { Component, OnInit } from '@angular/core';
import { HeaderContent } from '../../js/ui';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public headerContent!: HeaderContent

  constructor() { }

  ngOnInit(): void {
    this.headerContent = {
      appTitle: 'Lol',
      favoritesPageTitle: 'Избранное',
      mainPageTitle: 'Главная',
      recipesPageTitle: 'Рецепты'
    };
  }

  public Log(): void {
    
  }

}
