import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // sections!: [
  //   {
  //     name: "Всего рецептов",
  //     number: 15
  //   },
  //   {
  //     name: "Всего лайков",
  //     number: 15
  //   },
  //   {
  //     name: "В избранных",
  //     number: 15
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
