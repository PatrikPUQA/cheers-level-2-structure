import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { FavouriteToggleComponent } from '../../../../common/components/favourite-toggle/favourite-toggle.component';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-favourite-toggle',
  standalone: true,
  imports: [FavouriteToggleComponent],
  templateUrl: './cocktail-favourite-toggle.component.html',
  styleUrl: './cocktail-favourite-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailFavouriteToggleComponent {
  initialValue = input.required<boolean>();
  cocktailId = input.required<string>();

  protected cocktailService = inject(CocktailService);
}
