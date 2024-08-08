import { Injectable, OnDestroy } from '@angular/core';
import { CocktailClientStorageService } from './cocktail-client-storage.service';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  Subject,
  tap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CocktailDto } from '../models/cocktail-dto';
import { Cocktail } from '../models/cocktail';
import { FavouriteCocktailIds } from '../models/favourite-cocktail-ids';
@Injectable()
export class CocktailService implements OnDestroy {
  private readonly COCKTAILS_ENDPOINT = '/cocktails';
  private readonly _favouriteCocktailIdsSubject =
    new BehaviorSubject<FavouriteCocktailIds>(new Set());
  private readonly _nameFilterSubject = new BehaviorSubject('');

  constructor(
    private favouriteClientStorage: CocktailClientStorageService,
    private httpClient: HttpClient
  ) {
    console.log('cocktail service created');
    this._favouriteCocktailIdsSubject.next(
      this.favouriteClientStorage.loadFavouriteCocktailIds()
    );
  }

  ngOnDestroy(): void {
    console.log('cocktail service destroyed');
  }

  markAsFavourite(cocktailId: string): void {
    const favourites = new Set(this._favouriteCocktailIdsSubject.value);
    favourites.add(cocktailId);
    this.favouriteClientStorage.saveFavouriteCocktailIds(favourites);
    this._favouriteCocktailIdsSubject.next(favourites);
  }

  removeFromFavourite(cocktailId: string): void {
    const favourites = new Set(this._favouriteCocktailIdsSubject.value);
    favourites.delete(cocktailId);
    this.favouriteClientStorage.saveFavouriteCocktailIds(favourites);
    this._favouriteCocktailIdsSubject.next(favourites);
  }

  getAllCocktails(): Observable<Cocktail[] | null> {
    console.log('getAllCocktails');
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
            cocktail.name.toLowerCase().includes(nameFilter)
          );
      }),
      catchError(this.handErrorAndProvideNull)
    );
  }

  getCocktailById(id: string): Observable<Cocktail | null> {
    console.log('getCocktailById', id);
    return combineLatest([
      this.fetchCocktailById(id),
      this._favouriteCocktailIdsSubject,
    ]).pipe(
      map(([cocktailDto, favouriteIds]) => {
        console.log({ cocktailDto });
        return this.mapToCocktail(cocktailDto, favouriteIds);
      }),
      catchError(this.handErrorAndProvideNull)
    );
  }

  filterByName(term: string) {
    console.log('filterByName', term);
    this._nameFilterSubject.next(term);
  }

  private fetchAllCocktails(): Observable<CocktailDto[]> {
    console.log('fetchAllCocktails');
    return this.httpClient
      .get<CocktailDto[]>(this.COCKTAILS_ENDPOINT)
      .pipe(tap((result) => console.log({ result })));
  }

  private fetchCocktailById(id: string): Observable<CocktailDto | null> {
    console.log('fetchCocktailById', id);
    return this.httpClient.get<CocktailDto>(`${this.COCKTAILS_ENDPOINT}/${id}`);
  }

  private mapToCocktail(
    dto: CocktailDto | null,
    favouriteIds: Set<string>
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
    console.log(error);
    return of(null);
  }
}
