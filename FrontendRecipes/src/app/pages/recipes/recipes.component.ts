import { Component, OnInit } from '@angular/core';
import { CardContent } from '../../js/card-recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public cards!: CardContent[];

  constructor() { }

  ngOnInit(): void {
    this.cards = [
    {
      image: "/assets/images/card1.png",
      author: "@glazest",
      tag1: "десерты",
      tag2: "клубника",
      tag3: "сливки",
      favorites: "10",
      likes: "8",
      header: "Клубничная панна-котта",
      text: "Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.",
      time: "35",
      persons: "5"
    },
    {
      image: "/assets/images/card2.png",
      author: "@horilka",
      tag1: "вторые блюда",
      tag2: "мясо",
      tag3: "соевый соус",
      favorites: "4",
      likes: "7",
      header: "Мясные фрикадельки",
      text: "Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.",
      time: "90",
      persons: "4"
    },
    {
      image: "/assets/images/card3.png",
      author: "@turum-pum-pum",
      tag1: "десерты",
      tag2: "завтрак",
      tag3: "блины",
      favorites: "25",
      likes: "7",
      header: "Панкейки",
      text: "Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...",
      time: "40",
      persons: "3"
    },
    {
      image: "/assets/images/card4.png",
      author: "@sweet-girl",
      tag1: "десерты",
      tag2: "вишня",
      tag3: "мороженное",
      favorites: "4",
      likes: "7",
      header: "Полезное мороженое без сахара",
      text: "Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.",
      time: "35",
      persons: "2"
    }];
  }

}
