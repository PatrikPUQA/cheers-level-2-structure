import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cocktail-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cocktail-list-item.component.html',
  styleUrl: './cocktail-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListItemComponent {
  @Input({ required: true }) cocktail: Cocktail;
}
