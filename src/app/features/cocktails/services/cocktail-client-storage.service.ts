import { inject, Injectable } from '@angular/core';
import { ClientStorageService } from '../../../services/client-storage.service';
import { FavouriteCocktailIds } from '../models/favourite-cocktail-ids';

@Injectable()
export class CocktailClientStorageService {
  private readonly FAVOURITE_STORAGE_KEY = 'FAVOURITE_COCKTAILS';

  private clientStorage = inject(ClientStorageService);

  saveFavouriteCocktailIds(favouriteCocktails: FavouriteCocktailIds): void {
    try {
      this.clientStorage.setItem(
        this.FAVOURITE_STORAGE_KEY,
        JSON.stringify(Array.from(favouriteCocktails))
      );
    } catch (e) {
      console.warn('Could NOT save favourite cocktail ids:', e);
    }
  }

  loadFavouriteCocktailIds(): FavouriteCocktailIds {
    let favouriteCocktails = new Set<string>();
    try {
      const loadedString = this.clientStorage.getItem(
        this.FAVOURITE_STORAGE_KEY
      );
      console.log({ loadedString });
      favouriteCocktails = new Set(JSON.parse(loadedString));
    } catch (e) {
      console.warn('Could NOT load favourite cocktail ids:', e);
    }

    return favouriteCocktails;
  }
}
