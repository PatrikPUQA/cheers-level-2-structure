import { Routes } from '@angular/router';
import { CoctailService } from './services/coctail.service';

export const coctailRoutes: Routes = [
  {
    path: '',
    title: 'Coctails',
    providers: [CoctailService],
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/coctail-overview-page/coctail-overview-page.component'
          ).then((x) => x.CoctailOverviewPageComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './pages/coctail-detail-page/coctail-detail-page.component'
          ).then((x) => x.CoctailDetailPageComponent),
      },
    ],
  },
];
