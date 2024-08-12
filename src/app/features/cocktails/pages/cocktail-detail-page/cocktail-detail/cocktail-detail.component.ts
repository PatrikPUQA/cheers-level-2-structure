import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Cocktail } from '../../../common/models/cocktail';
import { AlcoholTagComponent } from '../../../common/components/cocktail-alcohol-tag/cocktail-alcohol-tag.component';
import { CocktailComponent } from '../../../common/components/cocktail/cocktail.component';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CocktailComponent, AlcoholTagComponent],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailDetailComponent {
  cocktail = input.required<Cocktail>();
}
