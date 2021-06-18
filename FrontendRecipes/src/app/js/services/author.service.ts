import { Injectable } from '@angular/core';
import { AuthorDto } from '../dto/author.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private author: AuthorDto;
  constructor() {
    this.author = {
      id: 1,
      name: "Иванова Елена Игоревна",
      login: "glazest",
      password: "123456",
      description: "Я хороший повар",
      amountOfRecipes: 15,
      amountOfLikes: 15,
      amountOfFavorites: 15
    }
   }

  public getAuthor(): Promise<AuthorDto> {
    return new Promise<AuthorDto>((resolve, reject) => {
      resolve(this.author);
    });
  }

  public updareAuthor(author: AuthorDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.author = author;
      resolve();
    })
  }
}
