import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { AlcoholTagComponent } from '../../../components/alcohol-tag/alcohol-tag.component';
import { CocktailComponent } from '../../../components/cocktail/cocktail.component';

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
