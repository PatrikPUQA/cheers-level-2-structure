import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cocktails',
    loadChildren: () =>
      import('./features/cocktails/cocktail.routes').then(
        (x) => x.cocktailRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cocktails',
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component').then(
        (x) => x.NotFoundPageComponent
      ),
  },
];
