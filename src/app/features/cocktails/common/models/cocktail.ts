import { CocktailDto } from './cocktail-dto';

export interface Cocktail extends CocktailDto {
  isFavourite: boolean;
}
