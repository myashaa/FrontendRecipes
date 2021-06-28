import { Component, OnInit, Input } from '@angular/core';
import { StepDto } from 'src/app/js/dto/step.dto';

@Component({
  selector: 'app-step-recipe',
  templateUrl: './step-recipe.component.html',
  styleUrls: ['./step-recipe.component.css']
})
export class StepRecipeComponent implements OnInit {

  @Input() content!: StepDto;

  constructor() { }

  ngOnInit(): void { }

}
