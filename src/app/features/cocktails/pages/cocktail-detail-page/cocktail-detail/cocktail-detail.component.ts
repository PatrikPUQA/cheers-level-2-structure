import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CocktailFavouriteToggleComponent } from '../../../components/cocktail-favourite-toggle/cocktail-favourite-toggle.component';
import { Cocktail } from '../../../models/cocktail';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CocktailFavouriteToggleComponent],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailDetailComponent {
  cocktail = input.required<Cocktail>();
}
