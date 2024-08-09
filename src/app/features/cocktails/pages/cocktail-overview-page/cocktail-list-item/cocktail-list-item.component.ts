import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CocktailFavouriteToggleComponent } from '../../../components/cocktail-favourite-toggle/cocktail-favourite-toggle.component';
import { AlcoholTagComponent } from '../../../components/alcohol-tag/alcohol-tag.component';
import { PrettyArrayPipe } from '../../../../../common/pipes/pretty-array.pipe';

@Component({
  selector: 'app-cocktail-list-item',
  standalone: true,
  imports: [
    RouterLink,
    CocktailFavouriteToggleComponent,
    AlcoholTagComponent,
    PrettyArrayPipe,
  ],
  templateUrl: './cocktail-list-item.component.html',
  styleUrl: './cocktail-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListItemComponent {
  @Input({ required: true }) cocktail: Cocktail;
}
