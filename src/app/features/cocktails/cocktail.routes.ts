import { Routes } from '@angular/router';
import { CocktailService } from './services/cocktail.service';
import { CocktailClientStorageService } from './services/cocktail-client-storage.service';

export const cocktailRoutes: Routes = [
  {
    path: '',
    title: 'Cocktails',
    providers: [CocktailClientStorageService, CocktailService],
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/cocktail-overview-page/cocktail-overview-page.component'
          ).then((x) => x.CocktailOverviewPageComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './pages/cocktail-detail-page/cocktail-detail-page.component'
          ).then((x) => x.CocktailDetailPageComponent),
      },
    ],
  },
];
