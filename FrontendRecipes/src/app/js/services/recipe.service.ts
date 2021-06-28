import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrls } from '../constants/backendUrls';
import { RecipeDto } from '../dto/recipe.dto';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getFourRecipes(): Observable<RecipeDto[]> {
    return this.http.get<RecipeDto[]>(BackendUrls.RecipeUrl);
  }

  public getRecipe(id: number): Observable<RecipeDto> {
    return this.http.get<RecipeDto>(`${BackendUrls.RecipeUrl}${"/"}${id}`);
  }

  public searchFourRecipes(category: string, SearchText: string): Observable<RecipeDto[]> {
    return this.http.get<RecipeDto[]>(`${BackendUrls.RecipeUrl}${"/"}${category}${"/"}${SearchText}`);
  }

  public getFavoriteRecipe(): Observable<RecipeDto> {
    return this.http.get<RecipeDto>(`${BackendUrls.RecipeUrl}${"/favorite"}`);
  }

  public addRecipe(recipe: RecipeDto): void {
    this.http.post(BackendUrls.RecipeUrl, recipe);
  }

  public deleteRecipe(id: number): void {
    this.http.delete<RecipeDto>(`${BackendUrls.RecipeUrl}${"/"}${id}`);
  }

  //
  public getFavoritesRecipes(): Promise<RecipeDto[]> {
    return new Promise<RecipeDto[]>((resolve, reject) => {
      resolve([]);
    });
  }
}