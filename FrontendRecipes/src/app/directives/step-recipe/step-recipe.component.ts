import { Component, OnInit, Input } from '@angular/core';
import { StepContent } from './step-recipe';

@Component({
  selector: 'app-step-recipe',
  templateUrl: './step-recipe.component.html',
  styleUrls: ['./step-recipe.component.css']
})
export class StepRecipeComponent implements OnInit {

  @Input() content!: StepContent;

  constructor() { }

  ngOnInit(): void {
  }

}
