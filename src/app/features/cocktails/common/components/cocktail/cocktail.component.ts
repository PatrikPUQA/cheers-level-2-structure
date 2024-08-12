import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { CocktailFavouriteToggleComponent } from '../cocktail-favourite-toggle/cocktail-favourite-toggle.component';
import { RouterLink } from '@angular/router';
import { Cocktail } from '../../models/cocktail';
import { CocktailItemEnum, CocktailItemType } from './types';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CocktailFavouriteToggleComponent, RouterLink],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailComponent {
  itemType = input.required<CocktailItemType>();
  cocktail = input.required<Cocktail>();

  readonly CocktailItemEnum = CocktailItemEnum;

  readonly ITEM_TYPE_MAPPER = {
    [CocktailItemEnum.LIST_ITEM]: {
      IMG_SIZE: 150,
      CLASS: 'list-item',
    },
    [CocktailItemEnum.DETAIL_ITEM]: {
      IMG_SIZE: 300,
      CLASS: 'detail-item',
    },
  } as const;

  @HostBinding('class') get itemTypeClass(): string {
    return this.ITEM_TYPE_MAPPER[this.itemType()].CLASS;
  }
}
