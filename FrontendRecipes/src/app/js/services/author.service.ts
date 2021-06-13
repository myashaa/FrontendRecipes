import { Injectable } from '@angular/core';
import { AuthorDto } from '../dto/author.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  public getAuthor(): Promise<AuthorDto> {
    return new Promise<AuthorDto>((resolve, reject) => {
      resolve({
        id: 1,
        name: "Иванова Елена Игоревна",
        login: "glazest",
        password: "123456",
        description: "Я хороший повар",
        amountOfRecipes: 15,
        amountOfLikes: 15,
        amountOfFavorites: 15
      });
    });
  }
}
