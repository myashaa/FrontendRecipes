import { Component, OnInit, Input } from '@angular/core';
import { RecipeDto } from 'src/app/js/dto/recipe.dto';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe!: RecipeDto;

  constructor() { }

  ngOnInit(): void {}
}
