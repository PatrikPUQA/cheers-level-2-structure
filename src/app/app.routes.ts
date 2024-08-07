import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'coctails',
    loadChildren: () =>
      import('./features/coctails/coctail.routes').then((x) => x.coctailRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/coctails',
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
