import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Tag } from '../../js/tag-recipe';
import { BlockContent } from 'src/app/js/block-recipe';
import { StepContent } from 'src/app/js/step-recipe';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  public blocks!: BlockContent[];
  public steps!: StepContent[];

  constructor() { }

  public addTitle() {
    this.blocks.push({
      title: "",
      ingridients: []
    });
  }

  public deleteTitle(block: number)
  {
    this.blocks.splice(block, 1);
  }
  
  public addStep()
  {
    this.steps.push({
      description: ""
    });
  }

  public deleteStep(step: number)
  {
    this.steps.splice(step, 1);
  }

  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // tags: Tag[] = [
  //   {name: 'Lemon'},
  //   {name: 'Lime'},
  //   {name: 'Apple'},
  // ];

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.tags.push({name: value});
  //   }

  //   // Clear the input value
  //   // event.chipInput!.clear();
  // }

  // remove(fruit: Tag): void {
  //   const index = this.tags.indexOf(fruit);

  //   if (index >= 0) {
  //     this.tags.splice(index, 1);
  //   }
  // }

  ngOnInit(): void {
    this.blocks = [];
    this.steps = [];
  }
}