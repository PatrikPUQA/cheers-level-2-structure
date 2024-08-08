import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailDetailComponent {}
