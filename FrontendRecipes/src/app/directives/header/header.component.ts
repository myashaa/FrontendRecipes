import { Component, Input, OnInit } from '@angular/core';
import { HeaderContent } from '../../js/ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() content!: HeaderContent;

  public name!: string;

  constructor() {
   }

  ngOnInit(): void {
  }

  public Log(text: string): void {
    console.log(text);
  }

}
