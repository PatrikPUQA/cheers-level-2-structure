import { Injectable } from '@angular/core';
import { CocktailClientStorageService } from './cocktail-client-storage.service';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  of,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CocktailDto } from '../common/models/cocktail-dto';
import { Cocktail } from '../common/models/cocktail';
import { FavouriteCocktailIds } from '../common/models/favourite-cocktail-ids';
@Injectable()
export class CocktailService {
  private readonly COCKTAILS_ENDPOINT = '/cocktails';
  private readonly _favouriteCocktailIdsSubject =
    new BehaviorSubject<FavouriteCocktailIds>(new Set());
  private readonly _nameFilterSubject = new BehaviorSubject('');

  constructor(
    private favouriteClientStorage: CocktailClientStorageService,
    private httpClient: HttpClient,
  ) {
    this._favouriteCocktailIdsSubject.next(
      this.favouriteClientStorage.loadFavouriteCocktailIds(),
    );
  }

  changeCocktailFavourite(cocktailId: string, isFavourite: boolean) {
    const favourites = new Set(this._favouriteCocktailIdsSubject.value);
    if (isFavourite) {
      favourites.add(cocktailId);
    } else {
      favourites.delete(cocktailId);
    }
    this.favouriteClientStorage.saveFavouriteCocktailIds(favourites);
    this._favouriteCocktailIdsSubject.next(favourites);
  }

  getAllCocktails(): Observable<Cocktail[] | null> {
    return combineLatest([
      this.fetchAllCocktails(),
      this._favouriteCocktailIdsSubject,
      this._nameFilterSubject,
    ]).pipe(
      map(([cocktailDtos, favouriteIds, nameFilter]) => {
        return cocktailDtos
          .map((cocktailDto) => {
            return this.mapToCocktail(cocktailDto, favouriteIds);
          })
          .filter((cocktail) =>
            cocktail.name.toLowerCase().includes(nameFilter),
          );
      }),
      catchError(this.handErrorAndProvideNull),
    );
  }

  getCocktailById(id: string): Observable<Cocktail | null> {
    return combineLatest([
      this.fetchCocktailById(id),
      this._favouriteCocktailIdsSubject,
    ]).pipe(
      map(([cocktailDto, favouriteIds]) => {
        return this.mapToCocktail(cocktailDto, favouriteIds);
      }),
      catchError(this.handErrorAndProvideNull),
    );
  }

  filterByName(term: string) {
    this._nameFilterSubject.next(term);
  }

  private fetchAllCocktails(): Observable<CocktailDto[]> {
    return this.httpClient.get<CocktailDto[]>(this.COCKTAILS_ENDPOINT);
  }

  private fetchCocktailById(id: string): Observable<CocktailDto | null> {
    return this.httpClient.get<CocktailDto>(`${this.COCKTAILS_ENDPOINT}/${id}`);
  }

  private mapToCocktail(
    dto: CocktailDto | null,
    favouriteIds: Set<string>,
  ): Cocktail {
    if (!dto) {
      throw new Error(`Trying to map a 'null' dto to coctail.`);
    }

    return {
      ...dto,
      isFavourite: favouriteIds.has(dto.id),
    };
  }

  private handErrorAndProvideNull(error: any): Observable<null> {
    return of(null);
  }
}
