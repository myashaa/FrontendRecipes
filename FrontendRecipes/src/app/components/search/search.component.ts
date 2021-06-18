import { Component, OnInit } from '@angular/core';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string = "";

  sections: string[] = ["Мясо", "Деликатесы", "Пироги", "Рыба"];

  constructor() { }

  ngOnInit(): void {
  }

  public searchRecipes(searchText: string): void {
    const path: string = ProjectUrls.RecipesUrl + "/?search=" + searchText;
    window.location.href = path;
  }

}
