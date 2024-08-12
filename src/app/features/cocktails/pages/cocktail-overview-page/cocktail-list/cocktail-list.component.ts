import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { CocktailListItemComponent } from '../cocktail-list-item/cocktail-list-item.component';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CocktailListItemComponent],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent {
  cocktails = input.required<Cocktail[]>();
}
