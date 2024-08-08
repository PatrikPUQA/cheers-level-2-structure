import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { CocktailListItemComponent } from '../cocktail-list-item/cocktail-list-item.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, CocktailListItemComponent],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent {
  @Input({ required: true }) cocktails: Cocktail[];
}
