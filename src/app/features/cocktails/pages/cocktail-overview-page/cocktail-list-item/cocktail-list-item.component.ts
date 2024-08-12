import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Cocktail } from '../../../common/models/cocktail';
import { RouterLink } from '@angular/router';
import { CocktailFavouriteToggleComponent } from '../../../common/components/cocktail-favourite-toggle/cocktail-favourite-toggle.component';
import { AlcoholTagComponent } from '../../../common/components/cocktail-alcohol-tag/cocktail-alcohol-tag.component';
import { PrettyArrayPipe } from '../../../../../shared/pipes/pretty-array.pipe';
import { CocktailComponent } from '../../../common/components/cocktail/cocktail.component';

@Component({
  selector: 'app-cocktail-list-item',
  standalone: true,
  imports: [CocktailComponent, AlcoholTagComponent, PrettyArrayPipe],
  templateUrl: './cocktail-list-item.component.html',
  styleUrl: './cocktail-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListItemComponent {
  cocktail = input.required<Cocktail>();
}
