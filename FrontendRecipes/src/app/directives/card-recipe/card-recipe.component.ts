import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from '../../js/card-recipe';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.css']
})
export class CardRecipeComponent implements OnInit {

  @Input() content!: CardContent;

  star: boolean = true;
  heart: boolean=true;
   
  switchStar()
  {
    this.star=!this.star;
  }

  switchHeart()
  {
    this.heart=!this.heart;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
