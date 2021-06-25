import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUrls } from 'src/app/js/constants/projectUrls';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string = "";

  sections: string[] = ["Мясо", "Деликатесы", "Пироги", "Рыба"];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public searchRecipes(category: string, searchText: string): void {
    this.router.navigate([ProjectUrls.RecipesUrl, category, searchText]);
  }

}
