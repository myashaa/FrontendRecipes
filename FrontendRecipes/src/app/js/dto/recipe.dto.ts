import { IngredientDto } from "./ingredient.dto";
import { StepDto } from "./step.dto";

export interface RecipeDto {
  id: number;
  imageUrl: string;
  author: string;
  authorId: number;
  tags: string[];
  favorites: number;
  likes: number;
  name: string;
  description: string;
  cookingTimeInMinutes: number;
  totalPersons: number;
  ingredients: IngredientDto[];
  steps: StepDto[];
}