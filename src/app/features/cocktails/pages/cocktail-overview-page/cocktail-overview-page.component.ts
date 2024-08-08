import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { CocktailFilterBarComponent } from './cocktail-filter-bar/cocktail-filter-bar.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-cocktail-overview-page',
  standalone: true,
  imports: [CommonModule, CocktailFilterBarComponent, CocktailListComponent],
  templateUrl: './cocktail-overview-page.component.html',
  styleUrl: './cocktail-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailOverviewPageComponent implements OnInit {
  readonly cocktailService = inject(CocktailService);

  protected cocktails$ = this.cocktailService.getAllCocktails();

  ngOnInit(): void {}
}
